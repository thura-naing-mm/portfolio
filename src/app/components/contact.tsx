'use client'
import React, { useEffect, useState } from 'react';
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography,
  Spinner
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { Title } from './title';
import { MessageDialog } from './dialog';
import { Form } from '../interface/mail';
import { verifyCaptchaAction } from '../api/captcha';

interface PropTypes { }

const styles = {
  card: `items-center`,
  typography: `mt-6 mb-2 font-normal dark:text-blue-gray-100`,
  form: `'w-80 max-w-screen-lg md:w-96 min-w-[80%] md:min-w-[40%] flex flex-col gap-2`,
  input: `dark:text-blue-gray-100`,
  error: `flex items-center	dark:text-blue-gray-100 h-4 text-start`,
  button: `mt-2`
}

export const Contact: React.FC<PropTypes> = ({ }) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isErrorMessage, setIsErrorMessage] = useState<boolean | null>(null);

  // initialises the powerful hook that is in charge of executing the
  // reCAPTCHA behind the scenes.
  const { executeRecaptcha } = useGoogleReCaptcha()

  // form validation rules 
  const validationSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('Your name is required!'),
    subject: Yup.string()
      .required('Your subject is required!'),
    email: Yup.string()
      .required('Your email is required!')
      .email('Your email is invalid!'),
    message: Yup.string()
      .required('Your message is required!'),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;

  async function onSubmit(data: Form) {
    setIsErrorMessage(null);
    setIsLoading(true)

    // if the component is not mounted yet
    if (!executeRecaptcha) {
      return
    }
    console.log(executeRecaptcha, 'executeRecaptcha')
    // receive a token
    const token = await executeRecaptcha('onSubmit');
    // validate the token via the server action we've created previously
    const verified = await verifyCaptchaAction(token);
    console.log(verified, 'verifiedverifiedverified')

    if (verified) {
      try {
        await fetch('/api/mail', {
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
        });
        setIsErrorMessage(false);
      } catch (error) {
        console.error(error);
        setIsErrorMessage(true);
      } finally {
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  }

  return (
    <>
      <Title title={'Contact'} />
      <Card color='transparent' shadow={false} className={styles.card}>
        <Typography color='blue-gray' className={styles.typography}>
          Send A Message!
        </Typography>
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
          <div>
            <Input
              color='blue-gray'
              label='Your Name'
              type='text'
              crossOrigin={undefined}
              className={styles.input}
              error={errors.fullName?.message ? true : false}
              {...register('fullName')}
            />
            <span className={styles.error}>{errors.fullName?.message}</span>
          </div>
          <div>
            <Input
              color='blue-gray'
              label='Your Subject'
              type='text'
              crossOrigin={undefined}
              className={styles.input}
              error={errors.subject?.message ? true : false}
              {...register('subject')}
            />
            <span className={styles.error}>{errors.subject?.message}</span>
          </div>
          <div>
            <Input
              color='blue-gray'
              label='Your Email'
              type='email'
              crossOrigin={undefined}
              className={styles.input}
              error={errors.email?.message ? true : false}
              {...register('email')}
            />
            <span className={styles.error}>{errors.email?.message}</span>
          </div>
          <div>
            <Textarea
              color='blue-gray'
              className={styles.input}
              label='Your Message'
              error={errors.message?.message ? true : false}
              {...register('message')}
            />
            <span className={styles.error}>{errors.message?.message}</span>
          </div>
          <Button type='submit' className={styles.button} fullWidth disabled={isLoading}>
            {isLoading ? 'LOADING...' : 'SEND ME'}
          </Button>
        </form>
      </Card>
      {isErrorMessage != null && (<MessageDialog errorMessage={isErrorMessage} />)}
    </>
  )
}
