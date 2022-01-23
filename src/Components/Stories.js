export default function Stories() {
  return <div className='stories'>
    <h1 className="secondary_header">
        Share your amazing story!
    </h1>
    <form method="POST" className="story-form">
      <div className="form-control">
        <label htmlFor="picture">Upload your Picture</label>
        <input type="file" name="pciture" id="" />
      </div>
      <div className="form-control">
          <label htmlFor="fname">First name</label>
          <input type="text" name="fname" id="fname" />
      </div>
    </form>
    </div>;
}
