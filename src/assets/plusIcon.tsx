const PlusIcon = ({color = "#000"}: {color?: string}) => {
    return (
      <svg width="20" height="20" viewBox="0 0 1024 1024" fill="#000000" x="244" y="244" role="img"
           xmlns="http://www.w3.org/2000/svg">
        <path fill={color} d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8Z"/>
        <path fill={color} d="M192 474h672q8 0 8 8v60q0 8-8 8H160q-8 0-8-8v-60q0-8 8-8Z"/>
      </svg>
    );
}

export default PlusIcon;
