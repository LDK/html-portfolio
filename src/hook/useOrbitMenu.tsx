import { Box, SxProps, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useOrbitMenu = (defaultActive?:string) => {
  interface OrbitButtonProps {
    index: number;
    href: string;
    label: string;
  }

  type OrbitMenuItemProps = Omit<OrbitButtonProps, 'index'>;

  const menuItems: OrbitMenuItemProps[] = [
    { href: '/about', label: 'About' },
    { href: '/skills', label: 'Skills' },
    { href: '/projects', label: 'Projects' },
    { href: '/experience', label: 'Experience' },
    { href: '/contact', label: 'Contact' },
  ];
  
  const [activeLink, setActiveLink] = useState(defaultActive || 'About');

  const navigate = useNavigate();

  const onClick = (label: string, href:string, e: React.MouseEvent) => {
    e.preventDefault();
    setActiveLink(label);
    navigate(href);
  }

  const OrbitMenu = () => {
    useEffect(() => {
      // Set the active link based on the current path, chopping off the leading slash and converting to title case
      setActiveLink(window.location.pathname.slice(1).split('-').map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') || 'About');
      // Scroll to the top of the page when the active link changes
      window.scrollTo(0, 0);
      // eslint-disable-next-line
    }, [window.location.pathname]);
  
  
    const orbitButtonSx:SxProps = {
      cursor: 'pointer',
      py: 1,
      my: 0,
      color: 'white',
    };

    const OrbitButton = ({ index, href, label }: OrbitButtonProps) => (
      <Typography component="a" href={href} sx={orbitButtonSx} 
        onClick={(e) => { onClick(label, href, e) }}
        className={
          `menu-button btn--${index}${label === activeLink ? ' active' : ''}`
        }>
        {label}
      </Typography>
    );

    return (
      <Box className="orbit-menu-container">
        <div className="curved-frame">
        </div>

        <div className="curved-menu">
          {menuItems.map((item, idx) => (
            <OrbitButton key={`btn-${idx + 1}`} {...{index: idx + 1, ...item}} />
          ))}
        </div>
      </Box>
    );
  }

  const mobileSx:SxProps = {
    display: { xs: 'flex', md: 'none' },
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%'
  };

  const mobileItemLabelSx:SxProps = {
    color: 'white',
    cursor: 'pointer',
    margin: '0',
    py: 1,
    px: { xs: 1, sm: 2}
  };

  // A mobile version of the menu that is a simple top bar with all the sections laid out horizontally as links
  const MobileMenu = () => (
    <Box className="mobile-menu" sx={mobileSx}>
      <Typography fontWeight={600} px={1} color="white" display={{ xs: 'none', sm: 'inline' }}>Daniel Swinney</Typography>

      {menuItems.map((item, idx) => (
        <Typography key={`btn-${idx + 1}`} component="a" href={item.href} sx={mobileItemLabelSx}
          onClick={(e) => { onClick(item.label, item.href, e) }}
          className={`${item.label === activeLink ? ' active' : ''}`}>
          {item.label}
        </Typography>
      ))}
    </Box>
  );

  return { OrbitMenu, activeLink, MobileMenu };
}

export default useOrbitMenu;