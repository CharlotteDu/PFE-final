import config from '../../config';
import React, { Component } from 'react';
import Edito from '../Edito/Edito';
import Element from '../Element/Element';
import StaticElement from '../StaticElement/StaticElement';
import Skew from '../Skew/Skew';
import Video from '../Video/Video';
import Masthead from '../Masthead/Masthead';
import './Board.css';
import './color.css';


function getSizes() {
    var width = Math.min(document.documentElement.clientWidth, config.ratio.width),
        height = Math.min(document.documentElement.clientHeight, config.ratio.height),
        slideWidth = width,
        boardHeight = height,
        boardTop = 0;

    if (width / height < config.ratio.width / config.ratio.height) {
        boardHeight = config.ratio.height * width / config.ratio.width;
        boardTop = (document.documentElement.clientHeight - boardHeight) / 2;
	}

    return {
        slideWidth: slideWidth,
        boardHeight: boardHeight,
        boardTop: boardTop
    }
}

export default class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            slideWidth:getSizes().slideWidth,
            boardHeight:getSizes().boardHeight,
            boardTop:getSizes().boardTop
        };
    }

    componentDidMount() {
        var _this = this;
        window.addEventListener('resize', function () {
            _this.setState({
                slideWidth:getSizes().slideWidth,
                boardHeight:getSizes().boardHeight,
                boardTop:getSizes().boardTop
            });
        });
    }

    render() {

        return (
            <div id="board" className="Board" style={{marginTop:this.state.boardTop, left:0,  minWidth:this.state.slideWidth, height: this.state.boardHeight}}>
                
                
                {/* CHAP 0 - Introduction*/ }

                <div className="Board__slide red Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_1} positionTop="15%"></Edito> 
                    <Element name="Score blanc.png" index="m1" positionLeft="5%"></Element> 
                </div>
                <div className="Board__slide red Board__slide--top">
                    <Edito content={this.props.datas.text[0].zone_2} positionTop="50%"></Edito>  
                    <Element name="Sifflet blanc.png" positionLeft="10%" index="p1"></Element>     
                </div>
                <div className="Board__slide red Board__slide--middle">
                    <Element name="AP-Chap0 cita1.png" index="m1" positionLeft="30%" ></Element>
                    <Element name="Chap0 cita1.png" index="m1" positionLeft="25%" ></Element>        
                </div> 
                <div className="Board__slide red Board__slide--top">
                    <Element name="Maillot blanc.png" positionLeft="40%" index="m1"></Element>  
                    <Edito content={this.props.datas.text[0].zone_3} positionTop="29%"></Edito>
                  
                </div>

                {/* CHAP 1*/ }
                <div className="Board__slide red">
                    <Skew position="left" name="Chap1 cover2.png" bg="Chap1 cover2.png" change={true} ></Skew>
                </div>

                <div className="Board__slide Board__slide--bottom sepia">
                    
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="8%"></Edito> 
                    
                </div>
                
                <div className="Board__slide Board__slide--bottom sepia">
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="8%"></Edito> 
                    <Edito content={this.props.datas.text[1].zone_1} positionBottom="8%"></Edito> 
                    <Element name="IMG Rodolphe noir et blanc.png" index="p1" positionLeft="10%"></Element> 
                    
                </div>
                <div className="Board__slide  Board__slide--top sepia">
                    <Edito content={this.props.datas.text[1].zone_2}  positionTop="40%"></Edito>
                    <Element name="Donne ballon.png" index="m2" positionLeft="45%"></Element> 
                    <Element name="Gants gardien.png" index="p1" positionLeft="10%"></Element> 
                </div>
                <div className="Board__slide  Board__slide--top sepia">
                    <Edito content={this.props.datas.text[1].zone_2bis}  positionTop="25%"></Edito>
                    <Element name="Fond texte2.png" positionLeft="0%"></Element> 
                </div>
                <div className="Board__slide  Board__slide--top sepia">
                    <Edito content={this.props.datas.text[1].zone_3}  positionTop="29%"></Edito>
                </div>
                <div className="Board__slide  Board__slide--top sepia">
                    <Edito content={this.props.datas.text[1].zone_4}  positionTop="11%"></Edito>
                    <Element name="Chap1 cita1.png" index="m1" positionLeft="20%"></Element> 
                </div> 
                <div className="Board__slide Board__slide--top sepia">
                    <Edito content={this.props.datas.text[1].zone_6} positionTop="55%"></Edito>
                    <Element name="IMG Rodolphe team.png" index="m1" positionLeft="-10%"></Element> 
                    <Element name="AP-IMG Rodolphe team.png" index="p1" positionLeft="20%"></Element> 
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_7} positionTop="25%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Element name="Infog.png" positionLeft="5%"></Element> 
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_20} positionTop="10%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_8}  positionTop="15%"></Edito>
                    <Element name="Transformation.png" index="m1" positionLeft="10%"></Element> 
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_9}  positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--middle sepia">
                    <Element name="CHAP1-INFOGRAPHIE-JOUEURS.png" ></Element> 
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_10}  positionTop="20%"></Edito>
                    <Element name="Multiple ballons plein3.png" positionLeft="-30%"></Element>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_11}  positionTop="35%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_12}  positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_13}  positionTop="10%"></Edito>
                    <Element name="Chap1 cita2.png" index="m1" positionLeft="25%"></Element>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Element name="IMG Portrait Stinat.png" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_14}  positionTop="36%"></Edito>
                    <Element name="Fleche.png" positionLeft="-12%"></Element>
                </div>
                <div className="Board__slide Board__slide--top sepia"> 
                    <Edito content={this.props.datas.text[1].zone_16}  positionTop="20%"></Edito>
                    <Element name="Joueur.png" index="m1" positionLeft="35%"></Element> 
                </div>
                 
                {/* CHAP 2 */}

                <div className="Board__slide sepia">
                    <Skew position="left" name="Chap2 cover.png" bg="Chap2 cover.png"></Skew>
                </div>
                <div className="Board__slide Board__slide--middle red white">
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_1} positionBottom="7%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_1} positionBottom="13%"></Edito>
                    <Element name="IMG echauffement.png" index="p1" positionLeft="1%"></Element>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_2} positionTop="20%"></Edito>
                    <Element name="Crampons.png" index="m1" positionLeft="20%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="Plusieurs ballons blancs.png" positionLeft="-45%" index="m1"></Element>
                    <Element name="Gros ballon bas.png" positionLeft="-55%" ></Element>
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="10%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_3} positionBottom="10%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_4} positionBottom="30%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_4} positionBottom="15%"></Edito>
                    <Element name="Fond texte.png" positionLeft="-9%"></Element>
                    
                    
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_4bis} positionBottom="45%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_4} positionBottom="15%"></Edito>
                    <Element name="Gros ballon blanc.png" positionLeft="-25%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="AP-Chap2 cita1.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap2 cita1.png" index="p1" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Edito content={this.props.datas.text[2].zone_5}  positionBottom="28%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_5}  positionBottom="28%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="IMG massage.png" positionLeft="-30%"></Element>
                </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_6} positionTop="20%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_6} positionTop="20%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--bottom red white">
                    <Element name="Stinat multiple.png" positionLeft="-100%" ></Element>
                    <Edito content={this.props.datas.text[2].zone_7} positionBottom="55%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_7} positionBottom="55%"></Edito>
                 </div>
                <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_8}  positionTop="17%"></Edito>
                    <Edito content={this.props.datas.text[2].zone_8}  positionTop="27%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom red white">
                    <Element name="AP-Chap2 cita2.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap2 cita2.png" index="p1" positionLeft="0%"></Element>
                </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_10} positionTop="15%"></Edito>
                    <Element name="Chap2 cita3.png" index="p1" positionLeft="0%"></Element>
                   
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_10bis} positionTop="45%"></Edito>
                    <Element name="Pied.png" index="m1" positionLeft="20%"></Element>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_11} positionTop="12%"></Edito>
                    <Element name="Chrono blanc.png" positionLeft="-10%"></Element>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_12} positionTop="29%"></Edito>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_13} positionTop="30%"></Edito>
                    <Element name="Drapeau blanc.png" positionLeft="-30%"></Element>
                 </div>
                 <div className="Board__slide Board__slide--bottom red white">
                    <Element name="AP-Chap2 cita4.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap2 cita4.png" index="p1" positionLeft="0%"></Element>
                </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_15} positionTop="38%"></Edito>
                    <Element name="Medaille plein.png" positionLeft="35%"></Element>
                 </div>
                 <div className="Board__slide Board__slide--top red white">
                    <Edito content={this.props.datas.text[2].zone_16} positionTop="10%"></Edito>
                    <Element name="Chap2 cita5.png" index="m1" positionLeft="40%"></Element>
                 </div>
                
                
                {/* CHAP 3 */}

                <div className="Board__slide red">
                    <Skew position="left" name="Chap3 cover.png" bg="Chap3 cover.png"></Skew>
                </div>
                <div className="Board__slide white_blue"></div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Element name="Sifflet noir.png" positionLeft="30%" index="m1"></Element>
                    <Edito content={this.props.datas.text[3].zone_1} positionTop="20%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[3].zone_2} positionTop="30%"></Edito>
                </div> 
                <div className="Board__slide white_blue">
                <Element name="IMG Rodolphe joueurs.png" positionLeft="10%"></Element>
                <Element name="AP-IMG Rodolphe joueurs.png" positionLeft="23%"></Element>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[3].zone_3} positionTop="15%"></Edito>
                    <Element name="Maillot noir.png" positionLeft="65%"></Element>
                </div>
                <div className="Board__slide Board__slide--top white_blue">
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="40%"></Edito>
                    <Element name="Chap3 cita1.png" index="p1" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_7} positionBottom="25%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Main chrono.png" positionLeft="30%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_8} positionBottom="10%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_8} positionBottom="10%"></Edito>
                    <Element name="Chap3 cita2.png" index="p1" positionLeft="0%"></Element>
             
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_9} positionBottom="30%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Donne ballon.png" index="p1" positionLeft="0%"></Element>
                    
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Element name="CHAP3-INFOG CARTONS.png" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                <Edito content={this.props.datas.text[3].zone_10} positionTop="-20%"></Edito>
                <Edito content={this.props.datas.text[3].zone_10} positionTop="-40%"></Edito>
                <Element name="CHAP3-INFOG CARTONS SUITE2.png" positionLeft="-30%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_11} positionBottom="40%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Gant.png" positionLeft="28%" index="m1"></Element>
  
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_12} positionBottom="7%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="IMG Stinat joueurs.png" positionLeft="-10%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_13} positionBottom="12%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Main carton rouge.png" positionLeft="30%" index="m1"></Element>
                </div>
                
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_14} positionBottom="9%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="9%"></Edito>
                    <Element name="IMG Flag.png" positionLeft="-20%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Element name="AP-Chap3 cita3.png" index="m1" positionLeft="46%"></Element>
                    <Element name="Chap3 cita3.png" index="m1" positionLeft="30%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_15} positionBottom="40%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_16} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Multiple ballons plein2.png" positionLeft="-20%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_17} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_18} positionBottom="30%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Ballon qui fuse.png" index="m2" positionLeft="30%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_19} positionBottom="50%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="But.png" index="p1" positionLeft="0%"></Element>
                    

                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_20} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Drapeau plein.png" index="m1" positionLeft="50%"></Element>
                  
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_21} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_22} positionBottom="40%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Terrain noir.png" positionLeft="0%"></Element>
                </div> 
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Element name="AP-Chap3 cita4.png" index="p1" positionLeft="11%"></Element>
                    <Element name="Chap3 cita4.png" index="p1" positionLeft="0%"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_23} positionBottom="40%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Main medaille.png" positionLeft="30%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_24} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                    <Element name="Cartons plein.png" positionLeft="40%" index="m1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom white_blue">
                    <Edito content={this.props.datas.text[3].zone_25} positionBottom="20%"></Edito>
                    <Edito content={this.props.datas.text[3].zone_5} positionTop="30%"></Edito>
                </div>
         
         
                {/* CHAP04 - Conclusion */}

                <div className="Board__slide white_blue">
                    <Skew position="left" name="Chap4 cover.png" bg="Chap4 cover.png"></Skew>
                </div>
                <div className="Board__slide only_blue"></div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Edito content={this.props.datas.text[4].zone_1} positionTop="31%"></Edito>
                </div>   
                <div className="Board__slide Board__slide--top white only_blue">
                    <Element name="IMG Stinat vestiaires.png" positionLeft="-15%"></Element>
                    <Element name="AP-IMG Stinat vestiaires.png" positionLeft="20%" index="m1"></Element>
                </div>   
                <div className="Board__slide Board__slide--top white only_blue">
                    <Edito content={this.props.datas.text[4].zone_2} positionTop="45%"></Edito>
                </div>
                <div className="Board__slide Board__slide--top white only_blue">
                    <Edito content={this.props.datas.text[4].zone_3} positionTop="27%"></Edito>
                    <Element name="Chrono blanc2.png" positionLeft="0%" index="p1"></Element>
                </div>
                <div className="Board__slide Board__slide--bottom only_blue white">
                    <Edito content={this.props.datas.text[4].zone_4} positionBottom="10%"></Edito>
                    <Edito content={this.props.datas.text[4].zone_4} positionBottom="10%"></Edito>
                    <Element name="IMG Stinat vestiaires2.png" positionLeft="0%" index="m1"></Element>
                </div>
                <div className="Board__slide only_blue">
                    <Skew position="left" bg="OURS.png" ></Skew>
                </div>
                <div className="Board__slide only_blue black">
                    <Masthead />
                </div>
            </div>
        )
    }
}

