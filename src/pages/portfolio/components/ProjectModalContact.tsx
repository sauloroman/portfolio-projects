import React from 'react'
import { Modal } from '../../../shared/components/modal/Modal'
import { IoIosSend } from "react-icons/io";
import { TiCancel } from "react-icons/ti";
import { useUI } from '../../../hooks';

export const ProjectModalContact: React.FC = () => {

  const { onCloseModal } = useUI()

  return (
    <Modal title='🚀 Contact me'>
      <form className='form contact'>
        <div className="form__field">
          <label htmlFor="name" className="form__label">Name</label>
          <input 
            placeholder='Type your name'
            id='name'
            className='form__input'
            type="text" 
          />
        </div>
        <div className="form__field">
          <label htmlFor="email" className="form__label">Email</label>
          <input  
            id='email'
            placeholder='Type your email'
            className='form__input'
            type="email" 
          />
        </div>
        <div className="form__field">
          <label htmlFor="message" className="form__label">Message</label>
          <textarea
            placeholder='Send me a message to create something outstanding'
            className='form__input form__textarea' 
            id="message"
          ></textarea>
        </div>
        <div className="form__buttons">
          <button className='btn btn--purple form__button'>
            <IoIosSend className='btn__icon' />
            Send
          </button>
          <button onClick={onCloseModal} className='btn btn--outline form__button'>
            <TiCancel className='btn__icon' />
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  )
}
