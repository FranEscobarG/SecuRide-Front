import '../../assets/css/loader.css'

function Loader() {
  return (
    <div class="loader" style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
      <div class="circle">
        <div class="dot"></div>
        <div class="outline"></div>
      </div>
    </div>
  );
}

export default Loader;
