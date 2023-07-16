import React from 'react';
import SidebarHeaderContainer from './SidebarHeaderContainer';
import "../Styles/Syllabus.css"

function Syllabus() {
  const fileUrl = 'https://www.zenclass.in/syllabus/mern-syllabus.pdf';
  const fileName = 'example.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
    window.open(fileUrl, '_blank');
  };

  return (
    <div className='syllabus-container'>
      <SidebarHeaderContainer headerTitle="Syllabus" />
     <div className='syllabus-info'>
  <table className='syllabus-table'>
    <tbody>
      <tr>
        <th>Course</th>
        <td>FSD_MERN</td>
      </tr>
      <tr>
        <th>Syllabus</th>
        <td><button onClick={handleDownload} className='download-btn'>Download PDF</button></td>
      </tr>
    </tbody>
  </table>
  
</div>

      </div>
  );
}

export default Syllabus;
