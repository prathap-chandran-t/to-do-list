
import { useRef } from 'react'
import { FaPlus } from 'react-icons/fa'

const AddItem = ({addItem,setAddItem,handleSubmit}) => {

const inputRef=useRef()

  

  return (
    <div>
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor="additem">AddItem</label>
            <input type="text" name="additem" id="additem" 
            placeholder='AddItem' 
            ref={inputRef}
            value={addItem}
            onChange={(e)=>setAddItem(e.target.value)}
            />
            <button type='submit'
            onClick={()=>inputRef.current.focus()}
            ><FaPlus /></button>
        </form>
    </div>
  )
}

export default AddItem