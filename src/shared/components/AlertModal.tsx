import React from 'react'
import { AlertType } from '../interfaces/ui.interface'
import { useUI } from '../../hooks'
import { Modal } from './modal/Modal'

const getIcon = (type: AlertType) => {
  return (
    <div className={`alert-modal__icon alert-modal__icon--${type}`}>
      {type === AlertType.success && (
        <svg viewBox="0 0 24 24">
          <path d="M5 13l4 4L19 7" />
        </svg>
      )}

      {type === AlertType.error && (
        <svg viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12" />
        </svg>
      )}

      {type === AlertType.warning && (
        <svg viewBox="0 0 24 24">
          <path d="M12 9v2m0 4h.01m-6.938 4h13.856" />
        </svg>
      )}
    </div>
  )
}

export const AlertModal: React.FC = () => {
  const {
    alert: { isOpen, text, title, type },
    onCloseAlert
  } = useUI()

  if (!isOpen) return null

  return (
    <Modal title={title} onCloseFn={onCloseAlert}>
      <div className={`alert-modal alert-modal--${type}`}>
        {getIcon(type)}

        <p className="alert-modal__text">
          {text}
        </p>
      </div>
    </Modal>
  )
}
