import { useEffect, useState} from 'react'
import './index.css'

const animalList = ['Tiger', 'Lion', 'Elephant']

const Autocomplete = () => {
const [activeText, setActiveText] = useState('')

useEffect(() => {
        const animalListText = animalList.toString()
        let activeAnimalCouter = 0
        let eachAnimalCounter = 0
        let autoCompleteText = ''
        const autocompleteTimeout = setInterval(() => {
            if (autoCompleteText === animalListText){
                setActiveText('')
                activeAnimalCouter = 0
                eachAnimalCounter = 0
                autoCompleteText = ''
            }
            if (activeAnimalCouter === animalList.length){
                console.log(activeText.length)
                activeAnimalCouter = 0
            }else{
                if (eachAnimalCounter === animalList[activeAnimalCouter].length){
                    activeAnimalCouter++
                    eachAnimalCounter = 0
                    if (eachAnimalCounter < animalList[activeAnimalCouter].length){
                        autoCompleteText += ","
                    }
                }else{
                    autoCompleteText += animalList[activeAnimalCouter][eachAnimalCounter]
                    eachAnimalCounter++
                }
            }
            setActiveText(autoCompleteText)
        }, 100);
    return () => clearTimeout(autocompleteTimeout)
}, [])




const onChangeInputAutocomplete = () => {
    //
}
return (
    <div className='autocomplete-container'>
        <input onChange={onChangeInputAutocomplete} value={activeText} className='input-element' />
    </div>
    )

}

// class Autocomplete extends Component{
//     state = {activeText: '', isShow: false}

//     componentDidMount(){
//         this.setState((prevState) => ({isShow: !prevState.isShow}))
//         const {activeText} = this.state
//         const animalListText = animalList.toString()
//         let activeAnimalCouter = 0
//         let eachAnimalCounter = 0
//         let autoCompleteText = ''
//         this.autocompleteTimeout = setInterval(() => {
//             if (autoCompleteText === animalListText){
//                 this.setState({activeText: ''})
//                 activeAnimalCouter = 0
//                 eachAnimalCounter = 0
//                 autoCompleteText = ''
//             }
//             if (activeAnimalCouter === animalList.length){
//                 console.log(activeText.length)
//                 activeAnimalCouter = 0
//             }else{
//                 if (eachAnimalCounter === animalList[activeAnimalCouter].length){
//                     activeAnimalCouter++
//                     eachAnimalCounter = 0
//                     if (eachAnimalCounter < animalList[activeAnimalCouter].length){
//                         autoCompleteText += ","
//                     }
//                 }else{
//                     autoCompleteText += animalList[activeAnimalCouter][eachAnimalCounter]
//                     eachAnimalCounter++
//                 }
//             }
//             this.setState({activeText: autoCompleteText})
//         }, 100);
    
//     }


//     onClickInput = () => {
//        clearInterval(this.autocompleteTimeout)
//     }

//     onChangeInputAutocomplete = event => {
//         // 
//     }

//     render(){
//         const {activeText, isShow} = this.state
//         return (
//             <div className='autocomplete-container'>
//                 <button type='button' onClick={this.onClickInput} className='button'>Show/Hide</button>
//                 {/* {isShow && } */}
//                 <input onChange={this.onChangeInputAutocomplete} value={activeText} className='input-element' />
//             </div>
//         )
//     }
// }

export default Autocomplete