import { useEffect, useState } from 'react';
import { useApi } from '../hooks/useApi';
import { Registro } from '../types/registro';
import { motion } from 'framer-motion';
import { 
  FaBook, FaPen, FaSave, FaTrash, FaCheck, FaList, FaThLarge,
  FaAnchor, FaShip, FaWater, FaFish, FaCompass, FaWind, FaLifeRing
} from 'react-icons/fa';
import { GiSailboat, GiShipWheel, GiPirateFlag, GiSail } from 'react-icons/gi';

export default function Home() {
  const { getRegistros, createRegistro, deleteRegistro } = useApi();
  const [titulo, setTitulo] = useState('');
  const [conteudo, setConteudo] = useState('');
  const [registros, setRegistros] = useState<Registro[]>([]);
  const [viewStyle, setViewStyle] = useState<'list' | 'card'>('card');
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  const fetchRegistros = async () => {
    const data = await getRegistros();
    setRegistros(data);
  };

  useEffect(() => {
    fetchRegistros();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await createRegistro({ titulo, conteudo });
    setTitulo('');
    setConteudo('');
    fetchRegistros();
  };

  const handleDelete = async (id: string) => {
    await deleteRegistro(id);
    fetchRegistros();
  };

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const getRandomIcon = () => {
    const icons = [FaShip, GiSailboat, FaAnchor, GiShipWheel, FaCompass, GiPirateFlag, GiSail, FaLifeRing];
    const RandomIcon = icons[Math.floor(Math.random() * icons.length)];
    return <RandomIcon className="inline mr-2 text-blue-700" />;
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="diario-container"
    >
      {/* Cabeçalho */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="diario-header"
      >
        <FaShip className="inline mr-3 text-blue-800 floating-icon" />
        Diário de Bordo
      </motion.div>
      
      {/* Seção de Novo Registro */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="novo-registro-section"
      >
        <h2 className="section-title">
          <FaPen className="inline mr-2 text-blue-700" />
          Novo Registro
        </h2>
        
        <form onSubmit={handleSubmit} className="registro-form">
          <div className="form-group">
            <label>Título</label>
            <input
              type="text"
              placeholder="Ex: Primeiro dia no mar"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              required
              className="input-field"
            />
          </div>
          
          <div className="form-group">
            <label>Conteúdo</label>
            <textarea
              placeholder="Descreva sua jornada hoje..."
              value={conteudo}
              onChange={(e) => setConteudo(e.target.value)}
              required
              className="textarea-field"
            />
          </div>
          
          <motion.button
            type="submit"
            className="save-button"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaSave className="inline mr-2" />
            Salvar Registro
          </motion.button>
        </form>
      </motion.div>

      {/* Divisor */}
      <div className="divider"></div>

      {/* Controles de Visualização */}
      <div className="view-controls">
        <button 
          onClick={() => setViewStyle('list')} 
          className={`view-button ${viewStyle === 'list' ? 'active' : ''}`}
        >
          <FaList className="inline mr-2" /> Lista
        </button>
        <button 
          onClick={() => setViewStyle('card')} 
          className={`view-button ${viewStyle === 'card' ? 'active' : ''}`}
        >
          <FaThLarge className="inline mr-2" /> Cartões
        </button>
      </div>

      {/* Seção de Registros */}
      <div className="registros-section">
        <h2 className="section-title">
          <GiSailboat className="inline mr-2 text-blue-700" />
          Meus Registros
        </h2>
        
        {registros.length === 0 ? (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="no-registros"
          >
            <FaWater className="inline mr-2" />
            Nenhum registro no mar... Comece sua jornada!
          </motion.p>
        ) : viewStyle === 'list' ? (
          <ul className="registros-list">
            {registros.map((registro) => (
              <motion.li 
                key={registro.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="registro-item"
              >
                <input 
                  type="checkbox" 
                  className="registro-checkbox" 
                  checked={!!checkedItems[registro.id]}
                  onChange={() => toggleCheck(registro.id)}
                />
                <div className="registro-content">
                  <div className="registro-title">
                    {getRandomIcon()}
                    {registro.titulo}
                  </div>
                  <div className="registro-text">{registro.conteudo}</div>
                  <div className="registro-footer">
                    <span className="registro-date">
                      {new Date(registro.criado_em).toLocaleString('pt-BR')}
                    </span>
                    <button 
                      onClick={() => handleDelete(registro.id)} 
                      className="delete-button"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        ) : (
          <div className="registros-grid">
            {registros.map((registro) => (
              <motion.div
                key={registro.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -5 }}
                className="registro-card"
              >
                <div className="card-header">
                  <h3 className="registro-card-title">
                    {getRandomIcon()}
                    {registro.titulo}
                  </h3>
                  <input 
                    type="checkbox" 
                    className="registro-checkbox" 
                    checked={!!checkedItems[registro.id]}
                    onChange={() => toggleCheck(registro.id)}
                  />
                </div>
                <p className="registro-card-content">{registro.conteudo}</p>
                <div className="card-footer">
                  <span className="registro-card-date">
                    {new Date(registro.criado_em).toLocaleString('pt-BR')}
                  </span>
                  <button 
                    onClick={() => handleDelete(registro.id)} 
                    className="delete-button"
                  >
                    <FaTrash />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
}