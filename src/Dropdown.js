import React, { Component } from 'react';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const Countries = [
    { label: "Albania", value: "https://mrandmrshowe.com/lifestyle-blog/albania-tourist-visa-application-filipino" },
    { label: "Algeria", value: "https://mrandmrshowe.com/lifestyle-blog/algeria-tourist-visa-application-filipino" },
    { label: "Angola", value: "https://mrandmrshowe.com/lifestyle-blog/angola-tourist-visa-application-filipino" },
    { label: "Antigua & Barbuda", value: "https://mrandmrshowe.com/lifestyle-blog/antigua-barbuda-evisa-application-filipino" },
    { label: "Argentina", value: "https://mrandmrshowe.com/lifestyle-blog/argentina-visa-application-filipino" },
    { label: "Argentina ETA", value: "https://mrandmrshowe.com/lifestyle-blog/argentina-eta-visa-application-filipino" },
    { label: "Armenia", value: "https://mrandmrshowe.com/lifestyle-blog/armenia-visa-application-filipino" },
    { label: "Australia", value: "https://mrandmrshowe.com/lifestyle-blog/australia-visa-application-filipino" },
    { label: "Austria", value: "https://mrandmrshowe.com/lifestyle-blog/lithuania-austria-visa-application-filipino" },
    { label: "Azerbaijan", value: "https://mrandmrshowe.com/lifestyle-blog/azerbaijan-visa-application-filipino" },
    { label: "Bahamas", value: "https://mrandmrshowe.com/lifestyle-blog/bahamas-tourist-visa-application-filipino" },
    { label: "Bahrain", value: "https://mrandmrshowe.com/lifestyle-blog/bahrain-visa-application-filipino" },
    { label: "Bangladesh", value: "https://mrandmrshowe.com/lifestyle-blog/bangladesh-visa-application-filipino" },
    { label: "Belarus", value: "https://mrandmrshowe.com/lifestyle-blog/belarus-tourist-visa-application-filipino" },
    { label: "Belize", value: "https://mrandmrshowe.com/lifestyle-blog/belize-tourist-visa-application-filipino" },
    { label: "Belgium", value: "https://mrandmrshowe.com/lifestyle-blog/belgium-schengen-visa-philippines-passport" },
    { label: "Bhutan", value: "https://mrandmrshowe.com/lifestyle-blog/bhutan-visa-application-filipino" },
    { label: "Bosnia & Herzegovina", value: "https://mrandmrshowe.com/lifestyle-blog/bosnia-herzegovina-visa-application-filipino" },
    { label: "Botswana", value: "https://mrandmrshowe.com/lifestyle-blog/botswana-visa-application-filipino" },
    { label: "Bulgaria", value: "https://mrandmrshowe.com/lifestyle-blog/bulgaria-tourist-visa-philippines-passport" },
    { label: "Canada", value: "https://mrandmrshowe.com/lifestyle-blog/canada-tourist-visa-application-fiipino" },
    { label: "Central Africa", value: "https://mrandmrshowe.com/lifestyle-blog/visa-application-guide-central-africa-filipinos" },
    { label: "Chile", value: "https://mrandmrshowe.com/lifestyle-blog/apply-online-chilean-chile-tourist-visa-filipinos" },
    { label: "China", value: "https://mrandmrshowe.com/lifestyle-blog/chinese-visa-application-filipino" },
    { label: "Croatia", value: "https://mrandmrshowe.com/lifestyle-blog/croatia-visa-application-filipino" },
    { label: "Cyprus", value: "https://mrandmrshowe.com/lifestyle-blog/cyprus-visa-application-filipino" },
    { label: "Czech Republic", value: "https://mrandmrshowe.com/lifestyle-blog/czech-republic-visa-application-filipino" },
    { label: "Denmark", value: "https://mrandmrshowe.com/lifestyle-blog/schengen-visa-denmark-embassy-philippines" },
    { label: "Dominican Republic", value: "https://mrandmrshowe.com/lifestyle-blog/tourist-visa-dominican-republic-filipino" },
    { label: "Dubai", value: "https://mrandmrshowe.com/lifestyle-blog/dubai-uae-visa-application-filipino" },
    { label: "East Africa", value: "https://mrandmrshowe.com/lifestyle-blog/east-africa-uganda-rwanda-kenya-visa-filipino" },
    { label: "Ecuador", value: "https://mrandmrshowe.com/lifestyle-blog/ecuador-visa-application-filipino" },
    { label: "Egypt", value: "https://mrandmrshowe.com/lifestyle-blog/egypt-tourist-visa-application-filipino" },
    { label: "El Salvador", value: "https://mrandmrshowe.com/lifestyle-blog/el-salvador-visa-application-filipino" },
    { label: "Estonia", value: "https://mrandmrshowe.com/lifestyle-blog/estonia-schengen-visa-application-filipino" },
    { label: "Ethiopia", value: "https://mrandmrshowe.com/lifestyle-blog/ethiopia-visa-application-filipino" },
    { label: "Fiji", value: "https://mrandmrshowe.com/lifestyle-blog/fiji-visa-application-filipino" },
    { label: "Finland", value: "https://mrandmrshowe.com/lifestyle-blog/finland-schengen-visa-application-filipino" },
    { label: "France", value: "https://mrandmrshowe.com/lifestyle-blog/france-schengen-visa-application-filipino" },
    { label: "Gabon", value: "https://mrandmrshowe.com/lifestyle-blog/gabon-visa-application-filipino" },
    { label: "Georgia", value: "https://mrandmrshowe.com/lifestyle-blog/georgia-visa-application-filipino" },
    { label: "Germany", value: "https://mrandmrshowe.com/lifestyle-blog/schengen-visa-germany-application-philippines-passport" },
    { label: "Greece", value: "https://mrandmrshowe.com/lifestyle-blog/greece-schengen-visa-application-filipino" },
    { label: "Grenada", value: "https://mrandmrshowe.com/lifestyle-blog/grenada-tourist-visa-application-filipino" },
    { label: "Hungary", value: "https://mrandmrshowe.com/lifestyle-blog/hungary-visa-application-filipino" },
    { label: "Iceland", value: "https://mrandmrshowe.com/lifestyle-blog/schengen-visa-iceland-application-philippines-passport" },
    { label: "India", value: "https://mrandmrshowe.com/lifestyle-blog/india-visa-application-filipino" },
    { label: "Indonesia", value: "https://mrandmrshowe.com/lifestyle-blog/indonesia-visa-application-filipino" },
    { label: "Iran", value: "https://mrandmrshowe.com/lifestyle-blog/iran-visa-application-filipino" },
    { label: "Ireland", value: "https://mrandmrshowe.com/lifestyle-blog/ireland-visa-application-filipino" },
    { label: "Italy", value: "https://mrandmrshowe.com/lifestyle-blog/italy-schengen-visa-application-filipino" },
    { label: "Jamaica", value: "https://mrandmrshowe.com/lifestyle-blog/jamaica-tourist-visa-application-filipino" },
    { label: "Japan", value: "https://mrandmrshowe.com/lifestyle-blog/japan-visa-application-filipino" },
    { label: "Jordan", value: "https://mrandmrshowe.com/lifestyle-blog/jordan-visa-application-filipino" },
    { label: "Kazakhstan", value: "https://mrandmrshowe.com/lifestyle-blog/kazakhstan-visa-application-filipino" },
    { label: "Kenya", value: "https://mrandmrshowe.com/lifestyle-blog/east-africa-uganda-rwanda-kenya-visa-filipino" },
    { label: "Kuwait", value: "https://mrandmrshowe.com/lifestyle-blog/tourist-visa-kuwait-application-filipino" },
    { label: "Kyrgyzstan", value: "https://mrandmrshowe.com/lifestyle-blog/kyrgyzstan-visa-application-filipino" },
    { label: "Latvia", value: "https://mrandmrshowe.com/lifestyle-blog/latvia-schengen-visa-philippines-passport" },
    { label: "Lebanon", value: "https://mrandmrshowe.com/lifestyle-blog/lebanon-visa-application-filipino" },
    { label: "Liechtenstein", value: "https://mrandmrshowe.com/lifestyle-blog/liechtenstein-schengen-visa-philippines-passport" },
    { label: "Luxembourg", value: "https://mrandmrshowe.com/lifestyle-blog/luxembourg-visa-application-filipino" },
    { label: "Macedonia", value: "https://mrandmrshowe.com/lifestyle-blog/macedonia-visa-application-filipino" },
    { label: "Madagascar", value: "https://mrandmrshowe.com/lifestyle-blog/madagascar-visa-on-arrival-filipino" },
    { label: "Malta", value: "https://mrandmrshowe.com/lifestyle-blog/malta-schengen-visa-filipino" },
    { label: "Marshall Islands", value: "https://mrandmrshowe.com/lifestyle-blog/marshall-islands-visa-on-arrival-filipino" },
    { label: "Mauritius", value: "https://mrandmrshowe.com/lifestyle-blog/mauritius-visa-on-arrival-philippines-passport" },
    { label: "Moldova", value: "https://mrandmrshowe.com/lifestyle-blog/moldova-visa-application-filipino" },
    { label: "Monaco", value: "https://mrandmrshowe.com/lifestyle-blog/monaco-visa-application-filipino" },
    { label: "Montenegro", value: "https://mrandmrshowe.com/lifestyle-blog/montenegro-tourist-visa-philippines-passport" },
    { label: "Montserrat", value: "https://mrandmrshowe.com/lifestyle-blog/montserrat-visa-application-filipino" },
    { label: "Mexico", value: "https://mrandmrshowe.com/lifestyle-blog/mexico-tourist-visa-application-filipino" },
    { label: "Pakistan", value: "https://mrandmrshowe.com/lifestyle-blog/pakistan-visa-application-filipino" },
    { label: "Palau", value: "https://mrandmrshowe.com/lifestyle-blog/palau-visa-on-arrival-filipino" },
    { label: "Panama", value: "https://mrandmrshowe.com/lifestyle-blog/panama-visa-application-filipino" },
    { label: "Paraguay", value: "https://mrandmrshowe.com/lifestyle-blog/paraguay-visa-application-filipino" },
    { label: "Poland", value: "https://mrandmrshowe.com/lifestyle-blog/poland-schengen-visa-application-filipino" },
    { label: "Portugal", value: "https://mrandmrshowe.com/lifestyle-blog/portugal-schengen-visa-philippines-passport" },
    { label: "Qatar", value: "https://mrandmrshowe.com/lifestyle-blog/qatar-evisa-application-filipino" },
    { label: "Romania", value: "https://mrandmrshowe.com/lifestyle-blog/romania-visa-application-filipino" },
    { label: "Russia", value: "https://mrandmrshowe.com/lifestyle-blog/russia-tourist-visa-application-filipino" },
    { label: "Rwanda", value: "https://mrandmrshowe.com/lifestyle-blog/east-africa-uganda-rwanda-kenya-visa-filipino" },
    { label: "Samoa", value: "https://mrandmrshowe.com/lifestyle-blog/samoa-permit-on-arrival-filipino" },
    { label: "Saudi Arabia", value: "https://mrandmrshowe.com/lifestyle-blog/saudi-arabia-visa-application-filipino" },
    { label: "Vatican & San Marino", value: "https://mrandmrshowe.com/lifestyle-blog/vatican-visa-san-marino-visa-application-filipino" },
    { label: "Schengen", value: "https://mrandmrshowe.com/lifestyle-blog/schengen-visa-application-filipino" },
    { label: "Serbia", value: "https://mrandmrshowe.com/lifestyle-blog/serbia-visa-application-filipino" },
    { label: "Slovakia", value: "https://mrandmrshowe.com/lifestyle-blog/slovakia-visa-application-filipino" },
    { label: "Uganda", value: "https://mrandmrshowe.com/lifestyle-blog/east-africa-uganda-rwanda-kenya-visa-filipino" },
    { label: "West Africa", value: "https://mrandmrshowe.com/lifestyle-blog/visa-guide-west-africa-filipinos" },
 ];
class Dropdown extends Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedOption: null,
      };
      this.handleSearchClick = this.handleSearchClick.bind(this);
    }
  
    handleSearchClick() {
      if (this.state.selectedOption) {
        window.location.href = this.state.selectedOption.value;
      }
    }
  
    render() {
      return (
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
            <Select 
                options={Countries}
                components={{
                  IndicatorSeparator: () => null
                }}
                scroll
                placeholder={'City or Country'}
                onChange={(selectedOption) => {
                  this.setState({ selectedOption });
                }}
                styles={{
                  control: (baseStyles, state) => ({
                    ...baseStyles,
                    textAlign: 'left', 
                    width: '264px', 
                    height: '56px', 
                    borderRadius: '8px', 
                    left: '50%',  
                    transform: 'translateX(-50%)', 
                    marginBottom: '8px',
                  }),
                  menu: (baseStyles) => ({
                    textAlign: 'left', 
                    width: '264px', 
                    borderRadius: '8px', 
                    backgroundColor: '#fff', 
                    paddingTop: '16px', 
                    margin: 'auto',
                    marginBottom: '8px',
                    zIndex: 1
                  }),
                  menuList: styles => {
                    console.log('menuList:', styles);
                    return {
                      ...styles,
                      maxHeight: 136
                    };
                  }
                }}
              />
              <button 
                className="search-button"
                onClick={this.handleSearchClick}
                style={{ width: '130px',
                height: '33px', 
                borderRadius: '20px', 
                backgroundColor: '#36ADA8', 
                color: '#fff', 
                border: 'none', 
                cursor: 'pointer', 
                fontSize: '14px',
                fontFamily: 'Mulish',
                marginTop: '8px',
                marginBottom: '8px',
                margin: 'auto',
                zIndex: 0
              }}
              >
                SEARCH NOW
              </button>
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      );
    }
  }
  
  export default Dropdown;