import React from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { type ContactFormInfo } from '../../../shared/interfaces/ui.interface'
import { useMessage, useScrollReveal } from '../../../hooks'

export const ContactForm: React.FC = () => {

  const { itemVariants, viewport } = useScrollReveal()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<ContactFormInfo>({
    defaultValues: {
      email: '',
      message: '',
      title: ''
    }
  })

  const { onSendMessage } = useMessage()
  
  return (
    <motion.div
      className='portfolio-contact__form'
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <div className="portfolio-contact__form-top">
        <p className="portfolio-contact__form-sub">Send a Message</p>
        <p>Fill out the form below and I'll get back to you as soon as possible.</p>
      </div>

      <form
        onSubmit={handleSubmit(onSendMessage)}
        className="portfolio-contact__form-form form"
      >
        <div className="form__field">
          <label
            htmlFor="email"
            className="form__label"
          >
            Email
          </label>

          <input
            {...register('email', {
              required: {
                value: true,
                message: 'Email is required'
              }
            })}
            placeholder='Enter your email'
            className='form__input'
            type="email"
            id='email'
          />

          {errors.email?.message && (
            <p className='form__error'>
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="form__field">
          <label
            htmlFor="title"
            className="form__label"
          >
            Title
          </label>

          <input
            {...register('title', {
              required: {
                value: true,
                message: 'Title is required'
              },
              maxLength: {
                value: 100,
                message: 'Title must be less than 100 characters'
              }
            })}
            placeholder='Enter the title'
            className='form__input'
            type="text"
            id='title'
          />

          {errors.title?.message && (
            <p className='form__error'>
              {errors.title.message}
            </p>
          )}
        </div>

        <div className="form__field">
          <label
            htmlFor="message"
            className="form__label"
          >
            Message
          </label>

          <textarea
            {...register('message', {
              required: {
                value: true,
                message: 'Message is required'
              },
              maxLength: {
                value: 1024,
                message: 'The message must be less than 1024 characters'
              }
            })}
            placeholder='Enter a message'
            className='form__textarea'
            rows={10}
            id="message"
          />

          {errors.message?.message && (
            <p className='form__error'>
              {errors.message.message}
            </p>
          )}
        </div>

        <button
          type='submit'
          className='btn btn--purple portfolio-contact__form-button'
        >
          <i className='bxr bx-send'></i>
          Send Message
        </button>
      </form>
    </motion.div>
  )
}
