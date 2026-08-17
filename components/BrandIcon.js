export default function BrandIcon({name,size=20,className='',strokeWidth=1.8,title=''}){
  const common={width:size,height:size,viewBox:'0 0 24 24',fill:'none','aria-hidden':title?undefined:true,role:title?'img':undefined,className};
  const p={stroke:'currentColor',strokeWidth,strokeLinecap:'round',strokeLinejoin:'round'};
  const icons={
    network:<><circle cx="6" cy="7" r="2.2" {...p}/><circle cx="18" cy="6" r="2.2" {...p}/><circle cx="12" cy="18" r="2.2" {...p}/><path d="m7.9 8.1 2.9 7.6M16.2 7.5l-3 8.3M8.1 7.1l7.7-.7" {...p}/></>,
    settings:<><path d="M4 7h10M18 7h2M4 17h2M10 17h10M14 4v6M7 14v6" {...p}/><circle cx="14" cy="7" r="1.4" {...p}/><circle cx="7" cy="17" r="1.4" {...p}/></>,
    menu:<><path d="M4 7h16M4 12h16M4 17h16" {...p}/></>,
    arrowRight:<><path d="M5 12h14M14 7l5 5-5 5" {...p}/></>,
    arrowLeft:<><path d="M19 12H5M10 7l-5 5 5 5" {...p}/></>,
    arrowUp:<><path d="M12 19V5M7 10l5-5 5 5" {...p}/></>,
    user:<><circle cx="12" cy="8" r="3.2" {...p}/><path d="M5.5 20c.7-4.2 2.9-6.2 6.5-6.2s5.8 2 6.5 6.2" {...p}/></>,
    users:<><circle cx="9" cy="8.5" r="3" {...p}/><path d="M3.5 19c.5-3.8 2.3-5.7 5.5-5.7s5 1.9 5.5 5.7M16 6.5a2.6 2.6 0 0 1 0 5.1M16.5 13.8c2.5.4 3.8 2.1 4 5.2" {...p}/></>,
    login:<><path d="M10 5H5v14h5M14 8l4 4-4 4M8 12h10" {...p}/></>,
    pen:<><path d="m4 20 4.2-1 10.5-10.5a2.1 2.1 0 0 0-3-3L5.2 16 4 20ZM13.9 7.3l2.8 2.8" {...p}/></>,
    megaphone:<><path d="M4 13V9l12-4v12L4 13Z" {...p}/><path d="M7 13.8 8.5 19h3L10 14.8M18 9v4" {...p}/></>,
    calendar:<><rect x="4" y="5" width="16" height="15" rx="2" {...p}/><path d="M8 3v4M16 3v4M4 10h16M8 14h3M14 14h2" {...p}/></>,
    sparkles:<><path d="m12 3 1.4 4.1L17.5 8.5l-4.1 1.4L12 14l-1.4-4.1-4.1-1.4 4.1-1.4L12 3ZM18.2 14.5l.8 2.2 2.2.8-2.2.8-.8 2.2-.8-2.2-2.2-.8 2.2-.8.8-2.2ZM5.2 14l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" {...p}/></>,
    gem:<><path d="m4 9 3-4h10l3 4-8 11L4 9Z" {...p}/><path d="M4 9h16M8 5l4 15 4-15" {...p}/></>,
    profile:<><circle cx="12" cy="8" r="3" {...p}/><path d="M6 20c.6-4.1 2.6-6.1 6-6.1s5.4 2 6 6.1" {...p}/><path d="M4 4h4M4 4v4M20 4h-4M20 4v4" {...p}/></>,
    briefcase:<><rect x="3" y="7" width="18" height="12" rx="2" {...p}/><path d="M9 7V5h6v2M3 12h18M10 12v2h4v-2" {...p}/></>,
    heart:<><path d="M20.8 8.8c0 5.2-8.8 10.1-8.8 10.1S3.2 14 3.2 8.8A4.8 4.8 0 0 1 12 6a4.8 4.8 0 0 1 8.8 2.8Z" {...p}/></>,
    link:<><path d="m9.5 14.5 5-5M7.2 16.8l-1.4 1.4a3.5 3.5 0 0 1-5-5l3.5-3.5a3.5 3.5 0 0 1 5 0M16.8 7.2l1.4-1.4a3.5 3.5 0 0 1 5 5l-3.5 3.5a3.5 3.5 0 0 1-5 0" {...p}/></>,
    bolt:<><path d="M13 2 5.5 13H11l-1 9L18.5 10H13l0-8Z" {...p}/></>,
    eye:<><path d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" {...p}/><circle cx="12" cy="12" r="2.4" {...p}/></>,
    trend:<><path d="M4 17 9 12l3 3 7-8M14 7h5v5" {...p}/></>,
    mail:<><rect x="3" y="5" width="18" height="14" rx="2" {...p}/><path d="m4 7 8 6 8-6" {...p}/></>,
    phone:<><path d="M7.2 3.8 5 5.2c-.8.5-1.1 1.5-.8 2.4 2 6.1 6.1 10.2 12.2 12.2.9.3 1.9 0 2.4-.8l1.4-2.2-4.2-3-1.8 1.8c-2.7-1.3-4.5-3.1-5.8-5.8L10.2 8 7.2 3.8Z" {...p}/></>,
    lock:<><rect x="5" y="10" width="14" height="10" rx="2" {...p}/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v2.5" {...p}/></>,
    play:<><rect x="3" y="6" width="18" height="12" rx="4" {...p}/><path d="m10 9 5 3-5 3V9Z" {...p}/></>,
    instagram:<><rect x="3.5" y="3.5" width="17" height="17" rx="5" {...p}/><circle cx="12" cy="12" r="4" {...p}/><circle cx="17.5" cy="6.7" r=".8" fill="currentColor" stroke="none"/></>,
    linkedin:<><rect x="4" y="9" width="3" height="10" {...p}/><circle cx="5.5" cy="5.5" r="1.5" fill="currentColor" stroke="none"/><path d="M11 19V9h3v1.7c1-1.3 2.1-2 3.7-2 2.4 0 3.3 1.7 3.3 4.4V19h-3v-5.3c0-1.5-.5-2.3-1.8-2.3-1.5 0-2.2 1-2.2 2.8V19h-3Z" fill="currentColor" stroke="none"/></>,
    youtube:<><rect x="2.8" y="6" width="18.4" height="12" rx="4" {...p}/><path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none"/></>,
    location:<><path d="M12 21s6-6 6-11a6 6 0 1 0-12 0c0 5 6 11 6 11Z" {...p}/><circle cx="12" cy="10" r="2" {...p}/></>,
    graduation:<><path d="m3 10 9-5 9 5-9 5-9-5Z" {...p}/><path d="M7 12.5V17c3 2 7 2 10 0v-4.5M21 10v6" {...p}/></>,
    clock:<><circle cx="12" cy="12" r="9" {...p}/><path d="M12 7v5l3 2" {...p}/></>,
    brandSpark:<><circle cx="12" cy="12" r="9.2" {...p}/><path d="m12 5.4 1.55 4.05 4.05 1.55-4.05 1.55L12 16.6l-1.55-4.05L6.4 11l4.05-1.55L12 5.4Z" fill="currentColor" stroke="none"/></>,
    idCard:<><rect x="4" y="3" width="16" height="18" rx="3" {...p}/><circle cx="12" cy="9" r="2.5" {...p}/><path d="M7.8 17c.6-2.5 2-3.7 4.2-3.7s3.6 1.2 4.2 3.7M8 5.8h2M14 5.8h2" {...p}/></>,
    laurel:<><path d="M18.8 4.5C15.2 6.6 12.9 10 12.4 14.2c-.3 2.3.1 4.3 1 5.8" {...p}/><path d="M17.1 6.1c-1.6-.5-2.6-.2-3.5.8M15 8.7c-1.7-.3-2.8.2-3.6 1.3M13.5 11.6c-1.8 0-2.8.7-3.4 1.8M12.7 14.7c-1.7.4-2.5 1.2-2.8 2.4" {...p}/></>,
    chevronDown:<><path d="m6 9 6 6 6-6" {...p}/></>,
    share:<><circle cx="18" cy="5" r="2.3" {...p}/><circle cx="6" cy="12" r="2.3" {...p}/><circle cx="18" cy="19" r="2.3" {...p}/><path d="m8.1 10.9 7.8-4.6M8.1 13.1l7.8 4.6" {...p}/></>,
    download:<><path d="M12 4v10M8 10l4 4 4-4M5 19h14" {...p}/></>
  };
  return <svg {...common}>{title&&<title>{title}</title>}{icons[name]||icons.sparkles}</svg>;
}
