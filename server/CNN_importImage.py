import sys
import numpy as np
import matplotlib.pyplot as plt
from keras.models import Sequential
from keras.layers import Dense, Dropout, Activation, Flatten
from keras.layers import Conv2D, MaxPooling2D
from keras.utils import np_utils
from keras.datasets import mnist
from keras.layers import LeakyReLU
from keras import backend as K
from keras.models import model_from_json
import matplotlib.image as mpimg
import cv2

# .\..\..\images\image.png
# .\images\image.png
def predict_digit(image_path):
    img = cv2.imread(image_path, cv2.IMREAD_GRAYSCALE)
    img = cv2.resize(img, (28,28))

    (X_train, y_train), (X_test, y_test) = mnist.load_data()
    X_val, y_val = X_train[50000:60000,:], y_train[50000:60000]
    X_train, y_train = X_train[:50000,:], y_train[:50000]

    X_train = X_train.reshape(X_train.shape[0], 28, 28, 1)
    X_val = X_val.reshape(X_val.shape[0], 28, 28, 1)
    X_test = X_test.reshape(X_test.shape[0], 28, 28, 1)

    # 4. One hot encoding label (Y)
    Y_train = np_utils.to_categorical(y_train, 10)
    Y_val = np_utils.to_categorical(y_val, 10)
    Y_test = np_utils.to_categorical(y_test, 10)

    json_file = open('.\model\model.json', 'r')
    loaded_model_json = json_file.read()
    json_file.close()
    loaded_model = model_from_json(loaded_model_json)
    # load weights into new model
    loaded_model.load_weights(".\model\model.h5")

    loaded_model.compile(loss='categorical_crossentropy',
                optimizer='adam',
                metrics=['accuracy'])

    img_test = img

    plt.imshow(img_test.reshape(28,28))

    y_predict = loaded_model.predict(img_test.reshape(1,28,28,1))
    print(np.argmax(y_predict))
    return

def main(image_path):
    predicted_digit = predict_digit(image_path)
    # print('Predicted Digit: {}'.format(predicted_digit))
 
if __name__ == "__main__":
    try:
        main(image_path = sys.argv[1])
    except:
        print('[ERROR]: Image not found')