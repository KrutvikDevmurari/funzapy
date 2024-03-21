import QuizComponent from "./(mainLayout)/quiz/QuizComponent";
import SignUpLoginLinks from "./(mainLayout)/quiz/SignUpLoginLinks";

export default function Home() {
  return (
    <div className="min-h-screen pt-5 bg-[url('/images/mainBackground.svg')]">
      <QuizComponent />
      <SignUpLoginLinks />
    </div>
  );
}
