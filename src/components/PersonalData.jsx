export default function PersonalData(props) {
  return (
    <div className="data-container">
      <h1>Personal information</h1>
      <div className="data-input">
        <input
          type="text"
          name="firstName"
          placeholder="First name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={props.handleChange}
        />
        <label htmlFor="inputTag">
          Photo
          <input
            type="file"
            name="image"
            placeholder="Photo"
            id="inputTag"
            onChange={props.handleChange}
          />
        </label>
        <input
          type="text"
          name="address"
          placeholder="Street name"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="country"
          placeholder="Country"
          onChange={props.handleChange}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone number"
          onChange={props.handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={props.handleChange}
        />
        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn"
          onChange={props.handleChange}
        />
        <textarea
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder="Description"
          onChange={props.handleChange}
        ></textarea>
      </div>
    </div>
  );
}
