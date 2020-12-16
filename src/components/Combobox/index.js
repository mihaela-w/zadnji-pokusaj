import React from 'react'
 
import { languages } from '../../constants/const'
import ComboboxItem from './ComboboxItem'
import styles from './style.module.css' 
 
const Combobox = () => (
    <div className={styles.combobox}>
        {<ul>
          {languages.map(({language, name, flag}) => 
            <ComboboxItem language={language}
              name={name} 
              flag={flag} />)}
        </ul>
        }
    </div>
  )
 
export default Combobox