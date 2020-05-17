<div className="edit">
<div className="uploadImage">
    <Form.Group className="imageInput">
        <Form.Label className="imgLabel">Perfil</Form.Label>
        <FiUpload className="fiIcon"/>
        <Form.Control 
        name="inputimg"
        type="file" 
        className="inputimg"
        onChange={onChangeHandler}>
        </Form.Control>
        <div className="imgPreview">
            <img src={url} alt=""/>
        </div>

    </Form.Group>
</div>