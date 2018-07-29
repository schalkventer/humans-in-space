import { generateNum, generateHex } from './helpers.js';


function createAstronaut(name, speed = 3, seed = Math.random()) {
  if (!name) {
    return new Error('\'name\' argument is required');
  }

  const style = `
    fill: ${generateHex(seed)};
    transform: scale(0.${generateNum(seed, 100, 30)});
  `
  
  return `
    <div class="astronaut" title="${name}">
      <div class="animation" style="animation-duration: ${speed}s;">
        <svg style="${style}" class="image" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        viewBox="0 0 378.845 378.845" style="enable-background:new 0 0 378.845 378.845;" xml:space="preserve">
          <path d="M134.979,109.125c0.466,1.445,0.846,2.931,1.13,4.415c0.366,1.916,2.043,3.249,3.924,3.249c0.25,0,0.503-0.023,0.757-0.072
          c2.17-0.415,3.592-2.511,3.177-4.681c-0.346-1.805-0.808-3.61-1.374-5.366c-0.677-2.102-2.928-3.259-5.034-2.579
          C135.455,104.769,134.3,107.023,134.979,109.125z"/>
          <path d="M94.22,78.258c-0.004,2.209,1.784,4.003,3.993,4.007c11.55,0.02,22.862,5.549,30.261,14.792
          c0.79,0.986,1.952,1.5,3.126,1.5c0.876,0,1.759-0.287,2.497-0.877c1.725-1.381,2.003-3.898,0.623-5.623
          c-8.899-11.117-22.542-17.769-36.493-17.792c-0.003,0-0.005,0-0.007,0C96.014,74.265,94.224,76.051,94.22,78.258z"/>
          <path d="M111.556,213.187H93.583c-2.209,0-4,1.791-4,4s1.791,4,4,4h17.973c2.209,0,4-1.791,4-4S113.765,213.187,111.556,213.187z"
          />
          <path d="M377.673,242.862l-12.267-12.268c-7.85-7.85-20.083-8.705-28.89-2.578l-8.015-8.014c1.206,0.16,2.019,0.266,2.062,0.266
          c0.869,0,1.72-0.283,2.42-0.814c0.845-0.643,1.399-1.594,1.543-2.645l9.951-72.923c0.299-2.188-1.232-4.205-3.421-4.504
          l-17.196-2.352c-11-1.501-21.256,5.228-24.561,15.436l-38.82-5.295c-2.749-0.376-5.492-0.485-8.204-0.351v-17.683
          c0-8.423-3.279-16.332-9.226-22.266c-5.931-5.945-13.836-9.22-22.26-9.22c-8.409,0-16.315,3.275-22.262,9.224
          c-5.946,5.949-9.218,13.856-9.211,22.262v21.354h-15.472l-15.866-15.867c1.16-4.726,1.788-9.659,1.788-14.738
          c0-34.102-27.744-61.846-61.846-61.846c-31.075,0-56.86,23.04-61.195,52.932l-28.49,28.49C2.925,144.772,0,151.833,0,159.344
          c0,7.51,2.925,14.571,8.236,19.882l64.601,64.601v6.694c0,24.257,19.734,43.991,43.99,43.991h6.281l3.159,3.157
          c15.425,15.425,35.679,23.135,55.94,23.135c20.257,0,40.521-7.714,55.941-23.135l39.558-39.414l42.269,42.305
          c0.781,0.781,1.805,1.172,2.828,1.172s2.048-0.391,2.828-1.172l52.042-52.042C379.235,246.957,379.235,244.423,377.673,242.862z
            M281.706,250.942v-30.279c6.279-0.85,12.338-3.678,17.152-8.493c1.79-1.789,3.317-3.77,4.588-5.909l17.293,17.292l-33.211,33.211
          L281.706,250.942z M235.134,211.779l-17.416-17.416l1.157-8.467c0.005-0.037,0.012-0.072,0.018-0.108
          c2.335,1.144,4.816,1.984,7.425,2.497c1.949,0.383,3.905,0.572,5.848,0.572c4.67,0,9.251-1.112,13.443-3.237l7.228,9.51
          c-2.208,1.521-4.3,3.246-6.236,5.183L235.134,211.779z M253.726,154.773c0.516,2.757,0.505,5.55-0.04,8.322
          c-1.133,5.765-4.443,10.743-9.321,14.019s-10.737,4.458-16.504,3.322c-2.472-0.486-4.788-1.367-6.912-2.618
          c2.37-6.185,6.408-11.608,11.811-15.716C238.888,157.443,246.175,154.925,253.726,154.773z M277.706,187.427
          c-6.241,0-12.278,1.303-17.818,3.759l-7.664-10.083c4.789-4.312,8.047-10.028,9.312-16.464c0.602-3.062,0.717-6.142,0.368-9.199
          l22.125,3.018l-3.954,29.037C279.289,187.452,278.5,187.427,277.706,187.427z M277.706,195.427c7.004,0,13.698,1.996,19.447,5.704
          c-1.033,1.977-2.351,3.782-3.951,5.382c-8.576,8.575-22.53,8.576-31.106,0c-1.593-1.593-2.901-3.38-3.924-5.327
          C263.941,197.442,270.667,195.427,277.706,195.427z M327.142,211.763l-6.327-0.865l8.876-64.996l6.32,0.864L327.142,211.763z
            M301.831,160.885c2.199,0.287,4.205-1.234,4.503-3.423c1.042-7.636,7.845-13.081,15.424-12.591l-8.218,60.17l-4.729-4.729
          c-5.826-5.826-13-9.809-20.817-11.674l3.962-29.101L301.831,160.885z M227.919,155.733c-5.158,3.921-9.298,8.825-12.247,14.384
          l-18.355-18.355c0,0,0.01-23.253,0.022-23.564h46.913c0.012,0.313,0.023,19.77,0.023,19.77
          C238.418,149.37,232.859,151.978,227.919,155.733z M220.79,105.652c6.283,0,12.177,2.439,16.603,6.877
          c2.235,2.229,3.963,4.833,5.129,7.669h-43.455c1.164-2.833,2.889-5.435,5.12-7.667C208.621,108.095,214.518,105.652,220.79,105.652
          z M192.733,158.491c0,0,19.485,19.443,19.681,19.579c-0.654,2.188-1.15,4.439-1.464,6.745l-0.334,2.447l-28.77-28.77H192.733z
            M229.478,217.436l-12.316,12.315l-71.1-71.099c3.758-4.657,6.851-9.867,9.144-15.489L229.478,217.436z M151.768,119.886
          c0,1.862-0.095,3.702-0.281,5.516c-13.12,12.749-30.839,18.138-46.117,14.177c-0.293-5.015-2.362-9.694-5.945-13.275
          c-3.871-3.872-9.018-6.004-14.492-6.004c-0.878,0-1.744,0.075-2.601,0.183c-7.531-16.336-2.581-37.634,12.607-52.821
          c0.562-0.562,1.113-1.085,1.657-1.587c0.442-0.011,0.882-0.034,1.327-0.034C127.612,66.041,151.768,90.196,151.768,119.886z
            M84.933,128.3c3.337,0,6.476,1.3,8.836,3.66s3.66,5.499,3.66,8.837s-1.3,6.476-3.66,8.836s-5.499,3.66-8.836,3.66
          c-3.338,0-6.477-1.3-8.837-3.661c-2.36-2.359-3.66-5.497-3.66-8.835s1.3-6.477,3.66-8.837S81.595,128.3,84.933,128.3z
            M84.094,67.849c-13.183,16.702-16.886,38.038-9.386,55.2c-1.537,0.889-2.979,1.966-4.268,3.256
          c-3.872,3.871-6.004,9.019-6.004,14.493s2.133,10.622,6.004,14.492c3.871,3.872,9.018,6.004,14.493,6.004
          c5.475,0,10.621-2.132,14.492-6.003c2.219-2.219,3.844-4.865,4.847-7.744c3.673,0.872,7.449,1.306,11.263,1.306
          c11.302,0,22.917-3.753,33.056-10.752c-7.483,20.754-27.368,35.633-50.668,35.633c-29.691,0-53.847-24.155-53.847-53.847
          C44.075,94.976,61.083,73.969,84.094,67.849z M72.837,193.034l-53.43-53.43l16.743-16.743c1.137,23.9,15.909,44.276,36.686,53.536
          V193.034z M30.293,189.97l14.084-14.084l6.308,6.308l-14.084,14.084L30.293,189.97z M8,159.344c0-5.307,2.048-10.294,5.758-14.077
          l24.963,24.963l-14.084,14.084L13.893,173.57C10.093,169.77,8,164.717,8,159.344z M42.257,201.934l14.084-14.084l16.496,16.496
          v28.168L42.257,201.934z M81.389,256.756c7.717-3.526,16.862-1.976,23.001,4.162c6.479,6.479,7.768,16.592,3.44,24.455
          C94.295,281.876,83.832,270.679,81.389,256.756z M116.176,286.496c3.76-8.856,2.798-19.004-2.65-27.016l19.934-19.935h23.702
          c0.314,0,0.625,0.012,0.937,0.024v46.92C157.788,286.5,116.393,286.5,116.176,286.496z M180.646,263.029
          c0,9.786-6.018,18.189-14.547,21.712v-43.426C174.627,244.839,180.646,253.243,180.646,263.029z M232.492,292.013
          c-26.868,26.865-70.06,27.699-97.939,2.499h22.609c17.36,0,31.483-14.123,31.483-31.483s-14.123-31.484-31.483-31.484h-21.358
          v-44.36c0-2.209-1.791-4-4-4s-4,1.791-4,4v46.704l-19.648,19.648c-7.678-6.432-18.017-8.282-27.319-5.152v-69.071
          c5.431,1.563,11.158,2.419,17.085,2.419c16.559,0,31.607-6.554,42.719-17.189l70.864,70.863l-9.691,9.691
          c-1.563,1.562-1.563,4.095,0,5.656c1.561,1.563,4.096,1.563,5.656,0l44.422-44.421c1.259,2.106,2.772,4.062,4.546,5.836
          c4.845,4.845,10.949,7.676,17.268,8.507v30.266L232.492,292.013z M293.185,262.419l33.211-33.21l7.042,7.042
          c1.563,1.563,4.096,1.563,5.656,0c5.449-5.447,14.157-5.668,19.889-0.693l-46.349,46.348L293.185,262.419z M322.803,292.075
          l-4.513-4.513l46.386-46.385l4.512,4.513L322.803,292.075z"/>
        </svg>
      </div>
    </div>
  `
}


export default createAstronaut;