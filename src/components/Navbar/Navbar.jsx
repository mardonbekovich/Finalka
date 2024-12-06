import s from './Navbar.module.scss';
const Navbar = () => {
  return (
    <>
      <section className={s.navbar}>
        <div className="container">
          <div className={s.type}>
            <p>Type</p>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Sport(10)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">SUV(12)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">MPV(16)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Sedan(20)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Coupe(14)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">Hatchback(14)</label>
          </div>

          <div className={s.capacity}>
            <p>Capacity</p>
            <input type="checkbox" id="check" />
            <label htmlFor="check">2 Person(10)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">4 Person(14)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">6 Person(12)</label>
            <input type="checkbox" id="check" />
            <label htmlFor="check">8 Person(16)</label>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
