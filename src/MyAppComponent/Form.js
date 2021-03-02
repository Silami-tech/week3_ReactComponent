import React from 'react';
const Form = () => {
    return (
            <div> 
                <form >
                    <div class="container">
                        <h2>Tugas Pertemuan Ketiga</h2>
                        <label for="uname">Username</label>
                        <input type="text" placeholder="Masukan Username Anda" name="uname" required/>
                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Masukan Password Anda" name="psw" required/>
                        <button type="submit">Login</button>
                        <label>
                            <input type="checkbox" checked="checked" name="remember"/>
                            Remember me 
                        </label>
                    </div>
                    <div class="container" >
                        <button type="button" class="cancelbtn">Cancel</button>
                    </div>
                </form>
            </div>
    )   
}
export default Form;