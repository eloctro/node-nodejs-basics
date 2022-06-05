const envs = process.env

export const parseEnv = () => {
    for (let key in envs) {
      if (key.slice(0, 4) === 'RSS_')
      console.log(`${key}=${envs[key]}`);
    }
    
};

parseEnv()