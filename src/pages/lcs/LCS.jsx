import React, { useState } from 'react';
import './Style.css';
import Sidebar from '../../components/Sidebar';

const LongestCommonSubsequenceComponent = () => {
  const [string1, setString1] = useState('');
  const [string2, setString2] = useState('');
  const [lengthOfLCS, setLengthOfLCS] = useState(null);
  const [lcsString, setLCSString] = useState('');

  const findLengthOfLCS = () => {
    const m = string1.length;
    const n = string2.length;
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (string1[i - 1] === string2[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1;
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
        }
      }
    }

    setLengthOfLCS(dp[m][n]);

    // Reconstruct the LCS string
    let i = m, j = n;
    let lcs = '';
    while (i > 0 && j > 0) {
      if (string1[i - 1] === string2[j - 1]) {
        lcs = string1[i - 1] + lcs;
        i--;
        j--;
      } else if (dp[i - 1][j] > dp[i][j - 1]) {
        i--;
      } else {
        j--;
      }
    }

    setLCSString(lcs);
  };

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="container" >
        <div className='heading'>
          <h3>Longest Common Subsequence (LCS)</h3>
        </div>
        <div className='third'>
          <div className="form-group">
          
            <input
              type="text"
              id="string1"
              placeholder='Enter String 1'
              className="form-control"
              value={string1}
              onChange={(e) => setString1(e.target.value)}
            />
          </div>
          <div className="form-group">
           
            <input
              type="text"
              id="string2"
              placeholder='Enter String 2'
              className="form-control"
              value={string2}
              onChange={(e) => setString2(e.target.value)}
            />
          </div>
        </div>
        <div className="btn-group">
          <button className="btn" onClick={findLengthOfLCS}>
            Find Length of LCS
          </button>
        </div>
        <div className="arrayDisplay" >
          <p style={{ backgroundColor: 'white',borderRadius:'10px' }} >Length of Longest Common Subsequence: {lengthOfLCS !== null ? lengthOfLCS : 'N/A'}</p>
          <p style={{ backgroundColor: 'white',borderRadius:'10px' }}>Longest Common Subsequence: {lcsString !== '' ? lcsString : 'N/A'}</p>
        </div>
      </div>
    </div>
  );
};

export default LongestCommonSubsequenceComponent;
