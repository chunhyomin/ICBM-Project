import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';

export default function Page3() {
  const navigate = useNavigate();

  return (
    <Container style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Page3</h1>
      <button 
        onClick={() => navigate("/")}
        className="btn btn-primary mt-3"
      >
        홈으로 돌아가기
      </button>
    </Container>
  );
}