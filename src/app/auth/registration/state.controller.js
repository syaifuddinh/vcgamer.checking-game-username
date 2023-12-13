const useStateController = () => {

    const onRegister = () => {
        window.location.replace("/auth/login");
    }

    return { onRegister };
}

export default useStateController;