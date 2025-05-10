import './styles.css'

const Stats = ({ correct, total, wpm, cpm, accuracy, duration, onRestart }) => {
  return (
    <div className="stats-container">
      <p>✅ Palavras corretas: {correct}</p>
      <p>🔤 Caracteres por minuto (CPM): {cpm}</p>
      <p>⌛ Palavras por minuto (WPM): {wpm}</p>
      <p>🎯 Precisão: {accuracy}%</p>
      {duration !== null && (
        <p><strong>Tempo:</strong> {duration} segundos</p> // ✅ Exibindo o tempo
      )}
      <button className="restart-button" 
        onClick={onRestart}>🔁 Reiniciar
      </button>

    </div>
  );
};

export default Stats;

  