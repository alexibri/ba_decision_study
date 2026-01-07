import "../../css/scenario1.css"

export default function S1Transition() {
    const navigate = useNavigate();
    const [enabled,setEnabled] = useState();

    useEffect( () => {
        const timeout = setTimeout( () => setEnabled(true), 1000);
        return () => clearTimeout(timeout);
    }, []);


    return <div>
        <div className="end">
            <div className="s1screen">
                <div className="transitioncard">
                    <h1 className="transitionSubtitle">Next Part</h1>

                <div className="s1buttonPopUp">
                    <button className="s1accept" onClick={() => navigate("/")}>
                        Continue
                    </button>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
}