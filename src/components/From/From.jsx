import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import userScheme, { fromScheme } from '../../reuse/Scheme/Scheme.js'

export default function From() {
  const [value, setValue] = useState('');
  const initialValues = {
    name: '',
    email: '',
    topic: '',
    message: ''
  };
  const handleSubmit = (values, actions) => {
    values.message = value;
    console.log(values);
    actions.resetForm();
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <div className="form">
      <h3 className="form-title">Let’s Talk 👋</h3>
      <p className="form-description">
        If you have any question or issue’s to use our product. Fill the form below. We’ll help you.
      </p>
      <Formik validationSchema={fromScheme} onSubmit={handleSubmit} className="form-inner" initialValues={initialValues}>
        <Form>
          <div className="inputs">
            <label>
              <div>
                Your name
                <span>*</span>
              </div>
              <Field name="name" type="text" placeholder="Enter your name" />
            </label>
            <label>
              <div>
                Your email
                <span>*</span>
              </div>
              <Field name="email" type="email" placeholder="Enter your email" />
            </label>
          </div>
          <label>
            <div>
              Choose Topic
              <span>*</span>
            </div>
            <br />
            <Field className="topic" type="text" name="topic" list="options" placeholder="Select one topic" />
          </label>
          <datalist id="options">
            <option value="Topic 1">Topic 1</option>
            <option value="Topic 2">Topic 2</option>
            <option value="Topic 3">Topic 3</option>
          </datalist>
          <label>
            <div>
              Message
              <span>*</span>
            </div>
            <br />
            <textarea
              onChange={handleChange}
              value={value}
              rows="5"
              className="message"
              placeholder="Write your message"
              name="message"
              type="text"
            />
          </label>
          <button type="submit">Contact Us</button>
        </Form>
      </Formik>
    </div>
  );
}
