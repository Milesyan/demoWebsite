import React, { Component } from 'react';
import styles from './ProcessPhotos.module.scss';
import { PhotobookPage } from '.';
import { Button } from '../basicComponents';
import { connect } from 'react-redux';
import { updateImageInfo } from '../actions/Photos';
import { bindActionCreators } from 'redux';
import { getPostsWithPhotos } from '../selectors/Photos';
import { getBaby } from '../selectors/Baby';
import { Months } from '../components/MonthsTemplate/';
import domtoimage from 'dom-to-image';
import saveAs from 'file-saver';
import Select from 'react-select';
import Cover from '../components/CoversTemplate/Cover';
import FirstPage from '../components/CoversTemplate/FirstPage';

type Props = {
  posts: Array<*>,
  updateImageInfo: typeof updateImageInfo
}

type State = {
}

const options = [
  { value: 0.1, label: '10%' },
  { value: 0.2, label: '20%' },
  { value: 0.3, label: '40%' },
  { value: 0.5, label: '50%' },
  { value: 0.8, label: '80%' },
  { value: 1, label: '100%' },
];

export class ProcessPhotos extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.pageNum = 0;
    this.state = {
      selectedOption: { value: 0.2, label: '20%' },
      totalPagesCount: 0
    }
  }
  
  onDownloadPDF = () => {
    const nodes = document.getElementById('photo-groups').childNodes;
    for (const [idx, node] of nodes.entries()) {
      this.saveOnePhotoPage(node, idx);
    }

  }

  saveOnePhotoPage = (node, idx) => {
    // First Page is larger than others
    const width = idx === 0 ? 5480 : 2396 * 2;
    const height = idx === 0 ? 3780 : 3354;
    domtoimage.toBlob(node, {width: width, height: height, style: {zoom: 1}})
      .then(blob=> {
        saveAs(blob, `photobook_${idx+1}.jpg`);
      })
  }
  onImagePreviewLoad = (...args) => {
    this.props.updateImageInfo && this.props.updateImageInfo(...args);
  }

  _pushPhotoBookElementToRes = (elements, res, mode, date, text=null) => {
    if (!elements || !elements.length) {
      return;
    }
    const key = elements.map(e=>e.id).reduce((p,v)=> p + '-' + v, '')
    this.pageNum += 1;
    res.push(<PhotobookPage key={key} photos={elements} mode={mode} text={text} date={date} pageNum={this.pageNum}/>)
  }

  _pushMonthElementToRes = (res, year, month, baby) => {
    this.pageNum += 1;
    res.push(<Months key={`${year}-${month}`} year={year} month={month} baby={baby}/>);
  }

  groupPhotos = (posts) => {
    const res = [];
    this.shownMonth = [];
    for (const post of posts) {
      const oneDayPhotos = post.photoEntities.filter(p=>p);
      if (!oneDayPhotos || !oneDayPhotos.length) {
        continue;
      }
      const horizontals = oneDayPhotos.filter(p=> p.width > p.height);
      const verticals = oneDayPhotos.filter(p=>p.width <= p.height);
      const text = post.text;
      const date = post.date;
      const firstPhotomode = oneDayPhotos[0].width > oneDayPhotos[0].height ? Symbol.for('horizontal') : Symbol.for('vertical');
      const [year, month, day] = date.split('-');
      if (!this.shownMonth.includes(month)) {
        this._pushMonthElementToRes(res, year, month, this.props.baby)
        this.shownMonth.push(month);
      }
      if (horizontals.length <= 6 && verticals.length <= 6) {
        if (firstPhotomode === Symbol.for('horizontal')) {
          this._pushPhotoBookElementToRes(horizontals, res, Symbol.for('horizontal'), date, text)
          this._pushPhotoBookElementToRes(verticals, res, Symbol.for('vertical'), date)
        } else {
          this._pushPhotoBookElementToRes(verticals, res, Symbol.for('vertical'), date, text)
          this._pushPhotoBookElementToRes(horizontals, res, Symbol.for('horizontal'), date)
        }
      } else if (horizontals.length > 6) {
        this._pushPhotoBookElementToRes(horizontals.slice(0, 6), res, Symbol.for('horizontal'), date, text)
        this._pushPhotoBookElementToRes(horizontals.slice(6), res, Symbol.for('horizontal'), date, text)
        this._pushPhotoBookElementToRes(verticals, res, Symbol.for('vertical'), date, text)
      } else if (verticals.length > 6) {
        this._pushPhotoBookElementToRes(verticals.slice(0, 6), res, Symbol.for('vertical'), date, text)
        this._pushPhotoBookElementToRes(verticals.slice(6), res, Symbol.for('vertical'), date, text)
        this._pushPhotoBookElementToRes(horizontals, res, Symbol.for('horizontal'), date, text)
      }
    }
    const r = [<Cover/>, <FirstPage/>].concat(this.groupByEveryTwo(res));
    return r
  }


  groupByEveryTwo = (pages) => {
    let group = [];
    for (let i=0, j=0; i < pages.length; i++) {
      const Ele = pages[i];
      if (i >= 2 && i % 2 === 0 ) {
        j++;
      }
      group[j] = group[j] || [];
      group[j].push(Ele);
    }
    if (group[group.length-1].length === 1) {
      const emptyPage = <div style={{ width: 2396,height: 3354, backgroundColor: 'white'}} />;
      group[group.length-1].push(emptyPage)
    }
    return group;
  }

  handleChange = (value) => {
    this.setState({
      selectedOption: value
    })
  }
  render() {
    const photoGroups = this.groupPhotos(this.props.posts);
    return (
      <div className={styles.container}>
        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', width: '80%', marginTop: 30}}>
          <Button onClick={this.onDownloadPDF} style={{margin: 0}}>
            Export
          </Button>
          <div style={{width: 200, textAlign: 'center'}}>
            Total Pages: {photoGroups.length}
          </div>
          <div style={{width: 200,}}>
            <Select
              style={{width: '100%'}}
              placeholder={'Zoom: 10%'}
              value={this.state.selectedOption}
              onChange={this.handleChange}
              options={options}
            />
          </div>
        </div>
        <div 
          className={styles.photos} 
          style={{zoom: this.state.selectedOption.value}}
          id="photo-groups">
          {photoGroups.map((group, idx)=>(
            <div 
              key={idx}
              className={styles.photoGroup}
            >
              {group}
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts: getPostsWithPhotos(state),
  baby: getBaby(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
  updateImageInfo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ProcessPhotos);