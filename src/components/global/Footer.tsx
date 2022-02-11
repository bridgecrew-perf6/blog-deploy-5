import React from 'react'

const Footer = () => {
  return (
    <div className="text-center bg-light py-4">
      <h6>Cộng đồng DEVBLOG- Một mạng xã hội mang tính xây dựng và toàn diện dành cho các nhà phát triển phần mềm. Với bạn mỗi bước trong cuộc hành trình của bạn.</h6>
      <span>Được phát triển bởi nhóm Sinh viên - dự án</span>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <span>Facebook :</span>
        <a href="https://www.facebook.com/vuong1st/" 
      target="_blank" rel="noreferrer"
      className="mb-2 d-block">
       https://www.facebook.com/vuong1st/
      </a>
      <span style={{marginLeft: '10px'}}>Email : </span>
        <a href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRttgJPfRhKZRxSfDPRXjcqRVPcZVXmbGpXcjRhTWSRFLHBPNLJspDGDsvQtpWvZPckXBnl" 
      target="_blank" rel="noreferrer"
      className="mb-2 d-block">
        vuong1st.fb@gmail.com
      </a>
      </div>
      <p> Copyright &copy; 2021</p>
    </div>
  )
}

export default Footer