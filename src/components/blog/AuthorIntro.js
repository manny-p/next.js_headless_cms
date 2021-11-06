import {Row, Col, Image} from '@chakra-ui/react'

const AuthorIntro = () => {
    return (
        <Row>
            <h5> Author Intro component</h5>
            <Col md="8">
                <div className="mb-4 admin-intro">
                    <Image
                        roundedCircle
                        width={64}
                        height={64}
                        className="mr-3"
                        src="https://via.placeholder.com/150"
                        alt="Generic placeholder"
                    />
                    <div>
                        <h5 className="font-weight-bold mb-0">Mentorshyp</h5>
                        <p className="welcome-text">
                            {/*Welcome*/}
                        </p>

                    </div>
                </div>
            </Col>
        </Row>
    )
}

export default AuthorIntro;