import React, { useState } from 'react';
import { Card, Button, Form, ListGroup } from 'react-bootstrap';
import image from './image/logo.png'
import BillYear from './switch/BillYear';
import BillMonth from './switch/BillMonth';
import vector from './image/Vector.png';
import Vector3 from './image/Vector3.png';
import vector2 from './image/Vector2.svg'
import tick from './image/tick.png';
const Dashboard = () => {
    const [isChecked, setIsChecked] = useState(false)

    const handleswitch = () => {
        setIsChecked(!isChecked)
    };
    return (
        <div>

            <img src={image} className='logoimg' style={{ marginTop: "15px", marginLeft: "10px" }} alt='logo image' />

            <div className='headerdash'>
                <Form onSubmit={handleswitch}>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label="Bill Monthly"
                        checked={isChecked}
                        onChange={handleswitch}
                        className='toggalbtn'
                    />
                    <br />

                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat magni ratione ex nobis odio optio nemo cumque commodi voluptatibus atque, quae totam cum ipsam possimus qui obcaecati error saepe odit?</p>

                </Form>
            </div>

            <div className='container'>
                <div className='row '>
                    <div className='col'>
                        <div className='upper'>
                            <img src={vector} alt='vector image' />&nbsp;&nbsp;&nbsp; <span style={{ fontWeight: '800', fontSize: '20px' }}>Standard</span><br />
                            <span className='spanpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit dolores rem? Incidunt atque officia .</span>
                            <br />
                            <span><b style={{ fontSize: "20px", }}> &#36;</b> &nbsp;&nbsp;For 1 Month</span>
                            <br />

                            <div className='trial'>Start Free Trial</div>
                        </div>
                        <div className='down'>
                            <div className='hr'></div>

                            <div>
                                <ul>
                                    <li > <img src={tick} alt="" className='tickimage' />One End Product</li>
                                    <li><img src={tick} alt="" className='tickimage' /> No attribute required</li>
                                    <li><img src={tick} alt="" className='tickimage' /> TypeScript</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Fifma Design Resource</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Create Multipal Product</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Create a SaaS Project</li>

                                </ul>
                            </div>
                        </div>

                    </div>

                    <div className='col'>
                        <div className='upper'>
                            <img src={vector2} alt='vector image' />&nbsp;&nbsp;&nbsp; <span style={{ fontWeight: '800', fontSize: '20px' }}>Standard Plus</span><br />
                            <span className='spanpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit dolores rem? Incidunt atque officia .</span>
                            <br />
                            <span><b style={{ fontSize: "20px", }}> &#36;</b> &nbsp;&nbsp;For 1 Month</span>
                            <br />

                            <div className='trial'>Start Free Trial</div>
                        </div>
                        <div className='down'>
                            <div className='hr'></div>

                            <div>
                                <ul>
                                    <li > <img src={tick} alt="" className='tickimage' />One End Product</li>
                                    <li><img src={tick} alt="" className='tickimage' /> No attribute required</li>
                                    <li><img src={tick} alt="" className='tickimage' /> TypeScript</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Fifma Design Resource</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Create Multipal Product</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Create a SaaS Project</li>

                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className='col'>
                        <div className='upper'>
                            <img src={Vector3} alt='vector image' />&nbsp;&nbsp;&nbsp; <span style={{ fontWeight: '800', fontSize: '20px' }}>Extended</span><br />
                            <span className='spanpara'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque fugit dolores rem? Incidunt atque officia .</span>
                            <br />
                            <span><b style={{ fontSize: "20px", }}> &#36;</b> &nbsp;&nbsp;For 1 Month</span>
                            <br />

                            <div className='trial'>Start Free Trial</div>
                        </div>
                        <div className='down'>
                            <div className='hr'></div>

                            <div>
                                <ul>
                                    <li > <img src={tick} alt="" className='tickimage' />One End Product</li>
                                    <li><img src={tick} alt="" className='tickimage' /> No attribute required</li>
                                    <li><img src={tick} alt="" className='tickimage' /> TypeScript</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Fifma Design Resource</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Create Multipal Product</li>
                                    <li><img src={tick} alt="" className='tickimage' /> Create a SaaS Project</li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Dashboard;
