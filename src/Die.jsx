
import './App.css';

export default function Die(props) {
    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "white"
    };

    // Define pip positions for each dice value (1-6)
    const pipPatterns = {
        1: [false, false, false, false, true, false, false, false, false],
        2: [true, false, false, false, false, false, false, false, true],
        3: [true, false, false, false, true, false, false, false, true],
        4: [true, false, true, false, false, false, true, false, true],
        5: [true, false, true, false, true, false, true, false, true],
        6: [true, false, true, true, false, true, true, false, true],
    };

    const pips = pipPatterns[props.value].map((show, i) => (
        <span key={i} className={show ? "pip" : "pip empty"}></span>
    ));

    return (
        <button
            className="die"
            style={styles}
            onClick={props.hold}
            aria-pressed={props.isHeld}
            aria-label={`Die with value ${props.value}, ${props.isHeld ? "held" : "not held"}`}
        >
            <div className="pip-grid">
                {pips}
            </div>
        </button>
    );
}