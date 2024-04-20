import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-section-container">
      <div className="skills-section">
        <div className="text-center text-content">
          <h2 className="display-3 fw-bold ">Skills</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            consectetur, perferendis dolor nemo temporibus a hic ratione
            laboriosam. Repudiandae deserunt explicabo laudantium quaerat.
            Provident quidem molestias est ad unde. Quod quaerat facere ab quas
            veritatis sunt modi. Nam est dicta dolorum, cum doloremque, eveniet
            beatae similique blanditiis eligendi incidunt magnam voluptates odit
            id placeat tenetur corrupti officia natus harum possimus sed,
            excepturi accusamus reiciendis cupiditate commodi! Sint sequi autem
            est, expedita explicabo ab quasi! Praesentium eveniet iste tempore
            a, minima, magni provident velit possimus alias molestias fugiat.
            Aperiam quis corporis similique expedita officiis. Eum deleniti
            perferendis modi temporibus veniam tempore.
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 left-col">
            <div className="my-focus">
              <h3>My Focus</h3>
              <hr />
              <ul>
                <li>DevOps</li>
                <li>Backend</li>
                <li>Frontend</li>
                <li>Data Engineer</li>
                <li>Solution Architecture</li>
                {/* Add more skills as needed */}
              </ul>
            </div>
          </div>
          <div className="col-md-6">
            <div className="programming-languages">
              <div className="skills-meter">
                <div>
                  <span>JavaScript</span>
                  <div className="meter">
                    <span style={{ width: "80%" }}></span>
                  </div>
                </div>
                <div>
                  <span>C#</span>
                  <div className="meter">
                    <span style={{ width: "90%" }}></span>
                  </div>
                </div>
                <div>
                  <span>Java</span>
                  <div className="meter">
                    <span style={{ width: "75%" }}></span>
                  </div>
                </div>
                <div>
                  <span>C++</span>
                  <div className="meter">
                    <span style={{ width: "60%" }}></span>
                  </div>
                </div>
                <div>
                  <span>Dart</span>
                  <div className="meter">
                    <span style={{ width: "77%" }}></span>
                  </div>
                </div>
                <div>
                  <span>GoLang</span>
                  <div className="meter">
                    <span style={{ width: "60%" }}></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
