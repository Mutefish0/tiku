import {firstPy,multiPy} from './chlib'
const Pysearch = {}

//由一个汉字得到一个或多个首字母
function getFirstLetter(chLetter){
    let code = chLetter.charCodeAt(0)
    return multiPy[code]?multiPy[code]:firstPy[code-19968]
}
Pysearch.getFirstLetter = getFirstLetter

//从第一个汉字开始，指示首字母是串是否与中文匹配
Pysearch.match = function(letters,chSentence){
    if(letters=='***') return true
    let lts = letters.toUpperCase()
    let sentence = chSentence.replace(/^\s+/,'')
    if(lts.length===0) return false
    for(let i=0;i<lts.length;i++){
        let firstLetter = getFirstLetter(sentence[i])
        if(firstLetter===undefined||firstLetter.indexOf(lts[i])<0) return false
    }
    return true
}

export default Pysearch