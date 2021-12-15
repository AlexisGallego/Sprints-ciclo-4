import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
	Navigate,
    Link,
    NavLink
  } from "react-router-dom";

function registro() {
  return (
    <div>
      <div>
       <body>
	
	<div class="limiterr">
		<div class="container-login200">
			<div class="wrap-login1200">
				<div class="login100-pic js-tilt" data-tilt>
				</div>

				<form class="login100-form validate-form">
					<span class="login100-form-title">
						REGISTRO
					</span>

					<div class="wrap-input100 validate-input" data-validate = "Valid nombre is required: ex@abc.xyz">
						<input class="input100" type="text" name="nombre" placeholder="Nombre"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-desktop" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid celular is required: ex@abc.xyz">
						<input class="input100" type="text" name="celular" placeholder="Celular"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-phone" aria-hidden="true"></i>
						</span>

					</div>

					<div class="wrap-input100 validate-input" data-validate = "Valid email is required: ex@abc.xyz">
						<input class="input100" type="text" name="email" placeholder="Email"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-envelope" aria-hidden="true"></i>
						</span>
					</div>

					<div class="wrap-input100 validate-input" data-validate = "Password is required">
						<input class="input100" type="password" name="pass" placeholder="Contraseña"/>
						<span class="focus-input100"></span>
						<span class="symbol-input100">
							<i class="fa fa-lock" aria-hidden="true"></i>
						</span>
					</div>
					
					<div class="container-login100-form-btn">
						<button class="login200-form-btn">
							Registrarse
						</button>
					</div>

					

					<div class="text-center p-t-136">
					<NavLink class="txt2" to="/login">
							Ya tiene una cuenta?
							<i class="fa fa-long-arrow-right m-l-5" aria-hidden="true"></i>
							</NavLink>
					</div>
				</form>
			</div>
		</div>
	</div>
	
	

		
	<script src="vendor/jquery/jquery-3.2.1.min.js"></script>
	<script src="vendor/bootstrap/js/popper.js"></script>
	<script src="vendor/bootstrap/js/bootstrap.min.js"></script>
	<script src="vendor/select2/select2.min.js"></script>
	<script src="vendor/tilt/tilt.jquery.min.js"></script>

	<script src="js/main.js"></script>
	</body>
	</div>
    </div>
  )
}

export default registro