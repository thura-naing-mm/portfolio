import { NextResponse } from 'next/server'
import sendgrid from '@sendgrid/mail';
import { Form } from '../../interface/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY || '');

export async function POST(request: Request) {
  const body: Form = JSON.parse(await request.text());
  return await sendgrid.send({
    to: process.env.TO_MAIL,
    from: body.email,
    subject: 'Portfolio Mail Form',
    html: `
      From: ${body.fullName}<br/>
      Subject: ${body.subject}<br/>
      Message: <div>${body.message}</div>
    `,
  }).then(() => {
    return NextResponse.json({ data: 'success' }, { status: 200 })
  }).catch(error => {
    if (error.response) {
      const { message, code } = error;
      return NextResponse.json({ error: message }, { status: code || 500 })
    }
    return NextResponse.json({ error: 'can not send mail' }, { status: 500 })
  });
}