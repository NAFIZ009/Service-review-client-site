/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-orange-300 text-primary-content">
  <div>
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABmJLR0QA/wD/AP+gvaeTAAAFyElEQVRoge2ae4gVVRzHP9d2dV3NTC3Z0jS0kMrKR2YPFSotKkqQLKMQRMsoI4yg7EkWthpkVCxGYkmlmFmkUWn2sAdBpGUZZmVur7UszXys66bTH9/fYWbHuXPP3N3LNegLw3pnft/f+c05v3N+jxH+R8nRpdwGtBZVwAogANYAR5fXnOJxH3oJdy0qrznF4RhgJ3qBScDf9u+rymlUMXgSGb7Cft9kv7cBPctlFEB74DxgPHA50CdFth/QBPwDDLR7OWAVepmXS2dmfnQBZhG6SfT6BLgogbPYni+I3T8homdCiexNxGig3gY+CKwDXkTusj1y/94IZ6jd2wv0TtA5yXh/AjWlMtyhM1BnBrmZHxKT6QDcCTSbzGS7/7b9rk3R/7rJvNZ2Jh+KUcBmG2gfcBdQkSJ/vcnuAaYRznbXFM7xhCs6sfUmt0RH4BHggA3wBTDIk/scLffOdA+Om4C/0N5pE5wLbDLF+4H7gcoM/K7Az8b/CUV0H7xqnDfRqVY0qoA56JgMgPX4r0Icl6A91Qic4snpieJKAEwpclzOAD43Jc3IrToUq8zwtOn7DP8Vvdo4u1H88UZ74GHC0+ZrYFgBTjtP3V2ALaZ3RgablhhnNZ4uNght4gC50xwK+3M7tHKrPY26ELlYE3C6J6cHsNXsujlNsBJt4P0mvAltcNAMXAx0y8MdYJzvPI0CeMo4a/F3sbGELpaI05DPBuhofRyojjw/y559DByRwL/Gni/1NAigE3rxAHggA+9547RABQpm++zhZhTs4ugM/GgydyQ8H4WCXdbcaASauP3AYE9ON+CX6I0BKK1wuVCdGZwPY0zunci9o9BqnoQOiHw4Ezg1z7PHzIYvST4Rq03/SOBaFEjfB/n7dJSwBSjhG51iRBRno9ThSuAjwgjv/HZRzOBq5KYHgIY8OjsCG03HcpQBrAI2ADsi+uMXSyM/5pOt6K8i9FGXO60Hvom8VBNwg8m/QpgJpKUk5xAG3PjViPbSGuAF4FHgNggTtssyvIDDQuPvBKai2XSoQRXfQbvGo/20Gr9MoJZwZcehYqtHGmEP8tk09AeG03LPXBp5ibSz/xaT+wPtIV90AL4y7mwfwiwPGZfbHED+2g5YafemefBduXqrj0ERDEUu1gT0LSTss8zTgU/RsVyPzvwm5Os+e8rlRss9ZONw7ntPIcEsDbBKdKz2NuVbPHkDTX5dhrEcriBM2/OiAvWSdngqbba/jfa3Op9gDE6u0cacjIqjtSj1SYMLdqkbHfwqszhywK9opgYWkAXV6QEwDwWy6HFaV4DrDpWVhQbZSv7kLw1P2ADLCsh1Q8EvQG2gCuB2421EKVEa5hn3wUIGBSio+SIH9AKOI2xp1pJcf3QHPjSZdzOM4TAYHSrNKC1JxW4baKyH4v7AByY/BnUPXbG1FgXF89HMzyQ8tuvRi2fBCOA348/1IbiAtZX0DTUEBc8ANQ1ciTkK+IH8OdAqsjXV4j2B5XjWJzmUNgSofMyH4SixXMihR3Z7lLIvQJnoG2gWR5j+Z9C+KIRhqIx2PYGZJNc7edGX0N/HZyFG0AdF4jg6oUB6EJW0SYj3BDag4q0oTKF1Lfx1ZkhSPjXDdH+b8GwQyphdT2A2/j2uRORQ9AxQEywLjkR52F6SW6UVKIWP6k3rCbQavQiLl+sy8IYRNq59EO8JzMU/S/DGRBtgO/5HZidUlBWqaeI9ge9J7gm0GZYRpgWt6q9G0A9Vda4nMA+5ZElRgwqhAH1kaQ1yqNR1gbee5C9WJcMEwgqw2Bb+icB7hMFxCWX6bv4SGfurBrcKu4zfgOqKsiHaX53qyelDmCm4VeheEusyYhwyaBfp3zBywI2EGUID6ncdVniWMFkcmfC8H/AW4Sos5jBZhTiqCDshAeoqzgEeQp+dXXT+nf/Af7eoAO5GtXY8VW9GX56OLZdxxQS7auAC4GS0UpvR5t7WhnZlxr/P27/JOb8zuwAAAABJRU5ErkJggg=="/>
    <p className="font-bold">
      Nafiz Ahmed <br/>Providing reliable Services since 1992
    </p> 
    <p>Copyright © 2022 - All right reserved</p>
  </div> 
  <div>
    <div className="grid grid-flow-col gap-4">
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></Link> 
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></Link> 
      <Link><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></Link>
    </div>
  </div>
</footer>
    );
};

export default Footer;