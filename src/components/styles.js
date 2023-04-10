
export const styles = () => {
    
    const titleStyles = {
    fontFamily: 'Mulish',
    fontWeight: 700,
    fontSize: '23px',
    color: '#FFFFFF',
    lineHeight: '30px',
    width: '132px',
    height: '30px',
  };
  
  const headingStyles = {
    fontFamily: 'Mulish',
    fontWeight: 800,
    fontSize: '45px',
    color: '#FFFFFF',
    lineHeight: '46px',
    width: '458px',
    height: '46px',
  };
  
  const descriptionStyles = {
    fontFamily: 'Mulish',
    fontWeight: 500,
    fontSize: '20px',
    color: '#FFFFFF',
    lineHeight: '25px',
    textAlign: 'center',
    width: '416px',
    height: '50px',
  };
  
  const linksStyles = {
    position: 'absolute',
    top: '30px',
    right: '80px',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  };
  
  const logoStyle = {
    position: 'absolute',
    top: '5px',
    left: '91px',
    fontFamily: 'Mulish',
    fontWeight: 600,
    fontSize: '22px',
    lineHeight: '28px',
    color: '#FFFFFF',
    textDecoration: 'none',
    cursor: 'pointer',
  };
  
  const linkStyle = {
    fontFamily: 'Mulish',
    fontWeight: 400,
    fontSize: '18px',
    lineHeight: '20px',
    marginLeft: '35px',
    color: '#FFFFFF',
    textDecoration: 'none',
    cursor: 'pointer',
  };
  
  const activeLinkStyle = {
    ...linkStyle,
    color: '#00BFFF', // change color to blue
  };

}