import React from 'react'


const Login = () => {
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center vh-100">
        <div className="col-md-6 col-sm-8">
          <div className="alert alert-danger color-info shadow">
            login error
          </div>
          <div className="card pt-4">
            <div className="card-body">
              <div className="text-center mb-5">
                <img src="..." className='img-fluid mb-4'/>
                <h3>Login</h3>
                <p>Please fill the form to login</p>
              </div>
              <form action="#">
                <div className="row">
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="email">Email</label>
                      <div className="text-danger my-1">email error</div>
                      <input type="email" id="email" className="form-control" name="email"
                       
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <div className="text-danger my-1">password error</div>
                      <input type="password" id="password" className="form-control" name="password"
                      
                      />
                    </div>
                  </div>
                </div>

                <div className="clearfix">
                  <button className="btn btn-primary" type="submit">Sign In</button>
                </div>
              </form>
              <div className="mt-3">
                <a href="#">Don't have an account? Sign Up</a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login