
function InspirationInfo() {
  return (
    <div className='inspobackground'>
      <br></br>
      <br></br>
      <img className='inspiration' src='/images/electronics3.png' alt='/'></img>
      <br></br>
      <p1>To begin this project a three dimensional model of a 1977 Peterbilt semi truck with a flatbed trailer was designed to house the electronic components that were needed.
          To find detailed information of the dimensions and components used refer to Page 11 of the Project Comprehensive Report.
          The next step was to test and install the components required to run the Safe Pass Display system.</p1>
      <br></br>
      <img className='inspiration2' src='/images/electronics1.png' alt='/'></img>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <p2>
      At this stage all of the modeling and purchasing of components was complete.
      The final steps here include soldering wires to proper length, installing the camera and the HC-SR04 Ultrasonic sensor into place and finalizing the code to run the program off start. 
      </p2>
      <br></br>
      <br></br>
      <img className='inspiration' src='/images/electronics2.png' alt='/'></img>
      <br></br>
      <p3>Shown is the front view of the final model, the HC-SR04 Ultrasonic sensor reads the distance of vehicles
      traveling in the opposite direction of the vehicle and the camera displays a live view to vehicles behind 
      the semi truck which further displays either “Safe To Pass” or “Do Not Pass” on the screen around the 
      border with green or red color respective to the state. </p3>
    </div>
  );
};

export default InspirationInfo;
