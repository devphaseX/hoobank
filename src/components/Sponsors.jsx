import { clients } from '../constants/data';

const Sponsors = () => (
  <div style={{ background: 'var(--bg-colour)' }}>
    <div className="layout-wrapper">
      <div
        className="flex align-center"
        style={{ justifyContent: 'space-around' }}
      >
        {clients.map(({ id, logo }) => (
          <div key={id} className="fit-image" style={{ width: '168px' }}>
            <img src={logo} alt={id} />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Sponsors;
