const useStateController = () => {

    const onRegularLogin = () => {
        window.location.replace("/");
    }

    return { onRegularLogin };
}

export default useStateController;