import { SlideMenu } from 'primereact/slidemenu';
import { Button } from 'primereact/button';
import { useContext, useRef } from 'react';
import { classNames } from 'primereact/utils';
import LanguageContext, { Language } from '../../../utils/LanguageContext';
import SimpleColorCircle from './SimpleColorCircle';
import { Theme} from '../../../utils/ThemeContext';
import { MenuItem } from 'primereact/menuitem';
export default function NavBarMenu() {
    const menu :any = useRef(null),
    [languageContext] =useContext(LanguageContext)

    const data= [
        {
            label:languageContext == Language.EN_US ? "Language":languageContext == Language.PT_BR ?"Lingua":"",
            items:[
                {label:"PT_BR"},
                {label:"EN_US"}
            ]
        },
        {
            label:languageContext == Language.EN_US ? "Color":languageContext == Language.PT_BR ?"Cor":"",
            items:[
                {
                    label:"test",
                    template:(item:any, options: any)=>{
                        return ColorLabelFactory(Theme.Base,"Base")
                    }
                },
                {
                    label:"test",
                    template:(item:any, options: any)=>{
                        return ColorLabelFactory(Theme.HighTechPurple,"HighTechPurple")
                    }
                },
                {
                    label:"test",
                    template:(item:any, options: any)=>{
                        return ColorLabelFactory(Theme.HighTechRed,"HighTechRed")
                    }
                },
                {
                    label:"test",
                    template:(item:any, options: any)=>{
                        return ColorLabelFactory(Theme.KissLand,"KissLand")
                    }
                }
            ]
        }
    ]
    return(
        <>
            <Button type="button" icon="pi pi-bars" onClick={(event) =>  menu.current.toggle(event) } className="p-button-secondary"
            ></Button>
            <SlideMenu popup ref={menu} model={data} backLabel={languageContext == Language.EN_US ? "Back":languageContext == Language.PT_BR ?"Voltar":""}/>
        </>

    )
}
function ColorLabelFactory(theme : Theme, name: String){
    if (theme == Theme.Base){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#171A21"}}>
            {name} 
        </div>)
    }
    if(theme==Theme.HighTechPurple){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#3C1361"}}>
            {name} 
        </div>)
    }
    if(theme==Theme.HighTechRed){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#FF0000"}}>
            {name} 
        </div>)
    }
    if(theme==Theme.KissLand){
        return (
        <div style={{display:"flex",alignItems:"center" ,backgroundColor:"#229867"}}>
            {name} 
        </div>)
    }
}