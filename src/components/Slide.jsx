export const Slide = ({ children }) => {
    return (
        <div className="w-[100vw] h-[100vh] flex items-center justify-center bg-gray-100 snap-start">
            <div className="w-[90%] h-[90%] rounded-lg backgroundColor">
                {children}
            </div>
        </div>
    );
}