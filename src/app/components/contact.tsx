'use client'
import React from 'react';
import {
  Card,
  Input,
  Textarea,
  Button,
  Typography
} from '@material-tailwind/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Title } from './title';

interface PropTypes { }

const styles = {
  card: `items-center`,
  typography: `mt-6 mb-2 font-normal dark:text-blue-gray-100`,
  form: `'w-80 max-w-screen-lg md:w-96 min-w-[80%] md:min-w-[40%] flex flex-col gap-1.5`,
  input: `dark:text-blue-gray-100`,
  error: `dark:text-blue-gray-100 h-4 text-start`,
  button: `mt-2`
}

export const Contact: React.FC<PropTypes> = ({ }) => {

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

  function onSubmit(data: any) {
    // display form data on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
    return false;
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
              type="text"
              crossOrigin={undefined}
              className={styles.input}
              error={errors.fullName?.message ? true : false}
              {...register('fullName')}
            />
            <div className={styles.error}>{errors.fullName?.message}</div>
          </div>
          <div>
            <Input
              color='blue-gray'
              label='Your Email'
              type="email"
              crossOrigin={undefined}
              className={styles.input}
              error={errors.email?.message ? true : false}
              {...register('email')}
            />
            <div className={styles.error}>{errors.email?.message}</div>
          </div>
          <div>
            <Input
              color='blue-gray'
              label='Your Subject'
              type="text"
              crossOrigin={undefined}
              className={styles.input}
              error={errors.subject?.message ? true : false}
              {...register('subject')}
            />
            <div className={styles.error}>{errors.subject?.message}</div>
          </div>
          <div>
            <Textarea
              color='blue-gray'
              className={styles.input}
              label='Your Message'
              error={errors.subject?.message ? true : false}
              {...register('message')}
            />
            <div className={styles.error}>{errors.message?.message}</div>
          </div>
          <Button type="submit" className={styles.button} fullWidth>
            Send Me
          </Button>
        </form>
      </Card>
    </>
  )
}
