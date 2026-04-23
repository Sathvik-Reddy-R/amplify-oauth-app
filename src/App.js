import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

function App() {
  return (
    <GoogleOAuthProvider clientId="136776099360-57bc3hrc2lp3tjc3ao3d6hn3ea2n7qj3.apps.googleusercontent.com">
      <div style={styles.container}>
        <h1 style={styles.title}>Login</h1>
        <p style={styles.subtitle}>Sign in with your Google account</p>

        <div style={styles.buttonWrapper}>
          <GoogleLogin
            size="small"   // 👈 makes button smaller
            shape="rectangular"
            theme="outline"
            text="signin_with"
            width="200"   // 👈 control width
            onSuccess={(response) => {
              console.log("JWT:", response);
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#f5f5f5"
  },
  title: {
    fontSize: "40px",
    marginBottom: "10px"
  },
  subtitle: {
    fontSize: "16px",
    color: "#555",
    marginBottom: "30px"
  },
  buttonWrapper: {
    transform: "scale(0.9)" // 👈 extra size control
  }
};

export default App;