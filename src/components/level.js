import React, {useState, useEffect} from 'react';

function Level(props) {
  const [data, setData] = useState(props.data);
  const [districtIndex, setdistrictIndex] = useState(0);
  const [confirmed, setConfirmed] = useState(0);
  const [active, setActive] = useState(0);
  const [recoveries, setRecoveries] = useState(0);
  const [deaths, setDeaths] = useState(0);
  const [deltas, setDeltas] = useState(0);

  useEffect(() => {
    setData(props.data);
  }, [props.data]);

  useEffect(() => {
    const parseData = () => {
      let confirmed = 0;
      let active = 0;
      let recoveries = 0;
      let deaths = 0;
      let deltas = {};
      const districtIndex = parseInt(data.findIndex(p => p.statecode === "KL"));
      data.forEach((state, index) => {
        if (index !== 0) {
          confirmed += parseInt(state.confirmed);
          active += parseInt(state.active);
          recoveries += parseInt(state.recovered);
          deaths += parseInt(state.deaths);
        } else {
          deltas = {
            confirmed: parseInt(state.deltaconfirmed),
            deaths: parseInt(state.deltadeaths),
            recovered: parseInt(state.deltarecovered),
          };
        }
      });
      setConfirmed(confirmed);
      setActive(active);
      setRecoveries(recoveries);
      setDeaths(deaths);
      setDeltas(deltas);
      setdistrictIndex(districtIndex);
    };
    parseData();
  }, [data]);
  return (
    <div className="Level">
      <div
        className="level-item is-cherry fadeInUp"
        style={{animationDelay: '1s'}}
      >
        <h5>Confirmed</h5>
        <h4>
          [
          {props.data && props.data[data.findIndex(p => p.statecode === "KL")]
            ? props.data[data.findIndex(p => p.statecode === "KL")].deltaconfirmed >= 0
              ? '+' + props.data[data.findIndex(p => p.statecode === "KL")].deltaconfirmed
              : '+0'
            : ''}
          ]
        </h4>
        <h1>{props.data[data.findIndex(p => p.statecode === "KL")].confirmed} </h1>
      </div>

      <div
        className="level-item is-blue fadeInUp"
        style={{animationDelay: '1.1s'}}
      >
        <h5 className="heading">Active</h5>
        <h4>&nbsp;</h4>
        {/* <h4>[{props.deltas ? props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta) >=0 ? '+'+(props.deltas.confirmeddelta-(props.deltas.recovereddelta+props.deltas.deceaseddelta)).toString() : '+0' : ''}]</h4>*/}
        <h1 className="title has-text-info">{props.data[data.findIndex(p => p.statecode === "KL")].active}</h1>
      </div>

      <div
        className="level-item is-green fadeInUp"
        style={{animationDelay: '1.2s'}}
      >
        <h5 className="heading">Recovered</h5>
        <h4>
          [
          {props.data && props.data[data.findIndex(p => p.statecode === "KL")]
            ? props.data[data.findIndex(p => p.statecode === "KL")].deltarecovered >= 0
              ? '+' + props.data[data.findIndex(p => p.statecode === "KL")].deltarecovered
              : '+0'
            : ''}
          ]
        </h4>
        <h1 className="title has-text-success">{props.data[data.findIndex(p => p.statecode === "KL")].recovered} </h1>
      </div>

      <div
        className="level-item is-gray fadeInUp"
        style={{animationDelay: '1.3s'}}
      >
        <h5 className="heading">Deceased</h5>
        <h4>
          [{props.data && props.data[data.findIndex(p => p.statecode === "KL")] ? (props.data[data.findIndex(p => p.statecode === "KL")].deltadeaths >= 0 ? '+' + props.data && props.data[data.findIndex(p => p.statecode === "KL")].deltadeaths : '+0') : ''}]
        </h4>
        <h1 className="title has-text-grey">{props.data[data.findIndex(p => p.statecode === "KL")].deaths}</h1>
      </div>
    </div>
  );
}

export default Level;
