import React from "react";

const nbrLignes = [0, 1, 2];
const nbrCells = [0, 1, 2, 3, 4, 5, 6];

const ParchisiTable = () => {
  return (
    <div style={{ border: "2px solid black" }}>
      {nbrLignes.map((i) => (
        <div className="row" style={{ margin: 0 }} key={i}>
          <div
            style={{
              width: 500,
              height: i === 1 ? 220 : 256,
              marging: 0,
              border: "2px solid black",
            }}
          >
            {i === 1 &&
              nbrLignes.map((k) => (
                <div
                  className="row"
                  style={{
                    border: "2px solid black",
                    margin: 0,
                    height: k === 1 ? 65 : 75,
                  }}
                >
                  {nbrCells.map((j) => (
                    <div
                      style={{
                        width: 70,
                        height: k === 1 ? 65 : 75,
                        marging: 0,
                        border: "2px solid black",
                      }}
                    ></div>
                  ))}
                </div>
              ))}
          </div>
          <div
            style={{
              width: 430,
              height: i === 1 ? 220 : 256,
              marging: 0,
              border: "2px solid black",
            }}
          >
            {i !== 1 &&
              nbrCells.map((k) => (
                <div
                  className="row"
                  style={{
                    border: "2px solid black",
                    margin: 0,
                    height: 33,
                  }}
                >
                  {nbrLignes.map((j) => (
                    <div
                      style={{
                        width: j === 1 ? 122 : 150,
                        height: 33,
                        marging: 0,
                        border: "2px solid black",
                      }}
                    ></div>
                  ))}
                </div>
              ))}
          </div>
          <div
            style={{
              width: 500,
              height: i === 1 ? 220 : 256,
              marging: 0,
              border: "2px solid black",
            }}
          >
            {i === 1 &&
              nbrLignes.map((k) => (
                <div
                  className="row"
                  style={{
                    border: "2px solid black",
                    margin: 0,
                    height: k === 1 ? 65 : 75,
                  }}
                >
                  {nbrCells.map((j) => (
                    <div
                      style={{
                        width: 70,
                        height: k === 1 ? 65 : 75,
                        marging: 0,
                        border: "2px solid black",
                      }}
                    ></div>
                  ))}
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ParchisiTable;
