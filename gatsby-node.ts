exports.createPages = ({actions}) => {
    const {createRedirect} = actions;

    createRedirect({ fromPath: '/old-url', toPath: '/presse', isPermanent: true });  
}