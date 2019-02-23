import React from 'react'

export default () => (
  <form
    name="contact_interop20"
    method="post"
    action="/BookingFormSuccess/"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
  >
    <p class="hidden">
      <label>
        Don’t fill this out if you're human: <input name="bot-field" />
      </label>
    </p>
    <p>
      <label>
        Your Name: <input type="text" name="name" />
      </label>
    </p>
    <p>
      <label>
        Your Email: <input type="email" name="email" />
      </label>
    </p>
    <p>
      <label>
        Your Role:{' '}
        <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select>
      </label>
    </p>
    <p>
      <label>
        Message: <textarea name="message" />
      </label>
    </p>
    <p>
      <button type="submit">Send</button>
    </p>
  </form>
)
